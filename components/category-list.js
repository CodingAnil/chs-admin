import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardBody,
  Spinner,
  Alert
} from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { Search, Plus, Edit2, Trash2 } from "react-feather";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    subcategories: [{ name: "", description: "" }]
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}admin/categories?search=${searchTerm}&page=${currentPage}&limit=10`
      );
      setCategories(response.data.data);
      setTotalPages(response.data.meta.pages);
    } catch (error) {
      setError("Failed to fetch categories");
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [searchTerm, currentPage]);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      setFormData({
        name: "",
        description: "",
        subcategories: [{ name: "", description: "" }]
      });
      setEditMode(false);
      setCurrentCategory(null);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith("subcategory")) {
      const [field, subIndex] = name.split("-");
      const newSubcategories = [...formData.subcategories];
      newSubcategories[subIndex][field === "subcategoryName" ? "name" : "description"] = value;
      setFormData({ ...formData, subcategories: newSubcategories });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addSubcategory = () => {
    setFormData({
      ...formData,
      subcategories: [...formData.subcategories, { name: "", description: "" }]
    });
  };

  const removeSubcategory = (index) => {
    const newSubcategories = formData.subcategories.filter((_, i) => i !== index);
    setFormData({ ...formData, subcategories: newSubcategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (editMode) {
        await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}admin/categories/${currentCategory._id}`, formData);
        toast.success("Category updated successfully");
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}admin/categories`, formData);
        toast.success("Category created successfully");
      }
      toggleModal();
      fetchCategories();
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (category) => {
    setCurrentCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      subcategories: category.subcategories
    });
    setEditMode(true);
    setModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        setLoading(true);
        await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}admin/categories/${id}`);
        toast.success("Category deleted successfully");
        fetchCategories();
      } catch (error) {
        toast.error("Failed to delete category");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-100 p-0 min-h-[200px]">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control form-control-lg w-64"
            style={{ height: "38px" }}
          />
          {/* <Button color="secondary" onClick={fetchCategories} className="ms-2">
            Refresh
          </Button> */}
        </div>
        <Button 
          color="primary" 
          onClick={toggleModal}
          className="d-inline-flex align-items-center"
          style={{ height: "38px" }}
        >
          <Plus size={16} className="me-1" />
          Add Category
        </Button>
      </div>
      {/* {error && <Alert color="danger">{error}</Alert>} */}
      {loading ? (
        <div className="text-center py-5">
          <Spinner size="sm" />
        </div>
      ) : (
        <div className="table-wrapper">
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Subcategories</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td className="align-middle fw-medium">{category.name}</td>
                  <td className="align-middle text-muted">{category.description}</td>
                  <td className="align-middle">
                    <div className="d-flex flex-column gap-1">
                      {category.subcategories.map((sub, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <span className="badge bg-light text-dark me-2">{sub.name}</span>
                          {sub.description && (
                            <small className="text-muted">{sub.description}</small>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="align-middle">
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        category.status === "Active"
                          ? "bg-success-subtle text-success"
                          : "bg-danger-subtle text-danger"
                      }`}
                    >
                      {category.status}
                    </span>
                  </td>
                  <td className="align-middle">
                    <div className="flex flex-row items-center space-x-4">
                      <Edit2
                        size={18}
                        onClick={() => handleEdit(category)}
                        className="text-primary cursor-pointer hover:scale-110"
                        title="Edit"
                      />
                      <Trash2
                        size={18}
                        onClick={() => handleDelete(category._id)}
                        className="text-danger cursor-pointer hover:scale-110"
                        title="Delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center mt-4 px-4">
        <div className="text-muted">
          Page {currentPage} of {totalPages}
        </div>
        <div className="d-flex gap-2">
          <Button
            color="light"
            size="sm"
            className="d-flex align-items-center"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            color="light"
            size="sm"
            className="d-flex align-items-center"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggleModal} size="lg" className="modal-dialog-centered">
        <ModalHeader toggle={toggleModal} className="border-0 pb-0">
          <h5 className="mb-0">{editMode ? "Edit Category" : "Add New Category"}</h5>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody className="pt-4">
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="name" className="form-label">Category Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-control-lg"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="description" className="form-label">Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-control-lg"
                    rows={3}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="subcategories-section mt-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0">Subcategories</h6>
                <Button 
                  type="button" 
                  color="light" 
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={addSubcategory}
                >
                  <Plus size={16} className="me-1" />
                  Add Subcategory
                </Button>
              </div>
              {formData.subcategories.map((subcategory, index) => (
                <div key={index} className="subcategory-item mb-3 p-3 border rounded bg-light">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="mb-0">Subcategory {index + 1}</h6>
                    {formData.subcategories.length > 1 && (
                      <Button
                        type="button"
                        color="link"
                        size="sm"
                        className="text-danger p-0"
                        onClick={() => removeSubcategory(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label className="form-label">Name</Label>
                        <Input
                          type="text"
                          name={`subcategoryName-${index}`}
                          value={subcategory.name}
                          onChange={(e) => handleInputChange(e, index)}
                          required
                          className="form-control-lg"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label className="form-label">Description</Label>
                        <Input
                          type="text"
                          name={`subcategoryDescription-${index}`}
                          value={subcategory.description}
                          onChange={(e) => handleInputChange(e, index)}
                          className="form-control-lg"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </ModalBody>
          <ModalFooter className="border-0 pt-0">
            <Button color="light" onClick={toggleModal} className="px-4">
              Cancel
            </Button>
            <Button 
              color="primary" 
              type="submit" 
              disabled={loading}
              className="px-4 d-flex align-items-center"
            >
              {loading ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  Processing...
                </>
              ) : (
                editMode ? "Update Category" : "Create Category"
              )}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoryList; 