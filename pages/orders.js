import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button,
  Form,
  Modal,
  Badge,
  InputGroup,
} from "react-bootstrap";
import Breadcrumb from "../components/common/bread-crump";
import GoBack from "../components/common/goBack";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { callGetApi } from "../services";
import { toastMessage } from "../utils/configs/toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalOrders: 0,
    completedOrders: 0,
    cancelledOrders: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      // &startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`
      const response = await callGetApi(
        `/admin/orders/products?status=${statusFilter}&search=${searchTerm}&page=${currentPage}&limit=${itemsPerPage}`
      );
      if (response.status) {
        setOrders(response.data.orders);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toastMessage("error", "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await callGetApi("/admin/orders/analytics");
      if (response.status) {
        setAnalytics(response.data);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
      toastMessage("error", "Failed to fetch analytics");
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchAnalytics();
  }, [searchTerm, statusFilter, dateRange, currentPage]);

  const handleDateRangeChange = (dates) => {
    setDateRange({
      startDate: dates.startDate.toISOString(),
      endDate: dates.endDate.toISOString(),
    });
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      created: "primary",
      in_progress: "info",
      completed: "success",
      cancelled: "danger",
      refunded: "warning",
      returned: "secondary",
    };
    return (
      <Badge bg={statusColors[status] || "secondary"}>
        {status.replace("_", " ")}
      </Badge>
    );
  };

  const handleOrderClick = async (orderId) => {
    try {
      const response = await callGetApi(`/admin/orders/${orderId}`);
      if (response.status) {
        setSelectedOrder(response.data);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
      toastMessage("error", "Failed to fetch order details");
    }
  };

  return (
    <>
      <div className="bg-secondprimary pt-11 pb-21"></div>
      <div className="layout-wrapper">
        <GoBack />
        <Container fluid className="mt-n22 px-6">
          <Breadcrumb title="Orders Management" />

          {/* Analytics Boxes */}
          <Row className="mb-4">
            <Col md={3}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <h6 className="text-muted mb-2">Total Orders</h6>
                  <h3 className="mb-0">{analytics.totalOrders || 0}</h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <h6 className="text-muted mb-2">Completed Orders</h6>
                  <h3 className="mb-0">
                    {analytics?.ordersByStatus?.created || 0}
                  </h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <h6 className="text-muted mb-2">Cancelled Orders</h6>
                  <h3 className="mb-0">
                    {analytics?.ordersByStatus?.cancelled || 0}
                  </h3>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <h6 className="text-muted mb-2">Total Revenue</h6>
                  <h3 className="mb-0">₹{analytics.totalRevenue.toFixed(2)}</h3>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Filters */}
          <Card className="mb-4">
            <CardBody>
              <Row>
                <Col md={3}>{">>"}</Col>
                <Col md={5}>
                  <InputGroup>
                    <Form.Control
                      placeholder="Search orders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-secondary">
                      <i className="fas fa-search"></i>
                    </Button>
                  </InputGroup>
                </Col>
                <Col md={4}>
                  <Form.Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value="created">Created</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="refunded">Refunded</option>
                    <option value="returned">Returned</option>
                  </Form.Select>
                </Col>
                {/* <Col md={5}>
                  <DateRangePicker
                    onApply={handleDateRangeChange}
                    initialSettings={{
                      autoUpdateInput: false,
                      locale: {
                        format: 'YYYY-MM-DD'
                      }
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Select date range"
                      value={
                        dateRange.startDate && dateRange.endDate
                          ? `${new Date(dateRange.startDate).toLocaleDateString()} - ${new Date(
                              dateRange.endDate
                            ).toLocaleDateString()}`
                          : ''
                      }
                    />
                  </DateRangePicker>
                </Col> */}
              </Row>
            </CardBody>
          </Card>

          {/* Orders Table */}
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Order </th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Total Amount</th>
                      <th>Status</th>
                      <th>Payment Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>
                          {order?.products
                            ?.map((it) => it?.productId?.name)
                            ?.join(",")}
                        </td>
                        <td>
                          {order?.userId?.name || order?.userId?.email || "N/A"}
                        </td>
                        <td>
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td>₹{order.totalAmount.toFixed(2)}</td>
                        <td>{getStatusBadge(order.status)}</td>
                        <td>{getStatusBadge(order.paymentStatus)}</td>
                        <td>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleOrderClick(order._id)}
                          >
                            <i className="fas fa-eye"></i> Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  Showing {orders.length} of {totalPages * itemsPerPage} entries
                </div>
                <div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="me-2"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>

      {/* Order Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <div>
              <Row>
                <Col md={8}>
                  <h5>Order Items</h5>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedOrder.products.map((item) => (
                        <tr key={item.productId._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.productId.image}
                                alt={item.productId.name}
                                style={{ width: "50px", marginRight: "10px" }}
                              />
                              <div>
                                <div>{item.productId.name}</div>
                                <small className="text-muted">
                                  {item.productId.description}
                                </small>
                              </div>
                            </div>
                          </td>
                          <td>{item.quantity}</td>
                          <td>₹{item.price.toFixed(2)}</td>
                          <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <h5>Order Summary</h5>
                      <div className="mb-3">
                        <strong>Order ID:</strong> {selectedOrder._id}
                      </div>
                      <div className="mb-3">
                        <strong>Order Date:</strong>{" "}
                        {new Date(selectedOrder.createdAt).toLocaleDateString()}
                      </div>
                      <div className="mb-3">
                        <strong>Status:</strong>{" "}
                        {getStatusBadge(selectedOrder.status)}
                      </div>
                      <div className="mb-3">
                        <strong>Payment Status:</strong>{" "}
                        {getStatusBadge(selectedOrder.paymentStatus)}
                      </div>
                      <div className="mb-3">
                        <strong>Payment Method:</strong>{" "}
                        {selectedOrder.paymentMethod}
                      </div>
                      <hr />
                      <div className="mb-3">
                        <strong>Total Amount:</strong> ₹
                        {selectedOrder.totalAmount.toFixed(2)}
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mt-4">
                    <Card.Body>
                      <h5>Shipping Address</h5>
                      <address className="mb-0">
                        {selectedOrder.shippingAddress.street}
                        <br />
                        {selectedOrder.shippingAddress.city},{" "}
                        {selectedOrder.shippingAddress.state}
                        <br />
                        {selectedOrder.shippingAddress.country} -{" "}
                        {selectedOrder.shippingAddress.zipCode}
                      </address>
                    </Card.Body>
                  </Card>

                  {selectedOrder.trackingNumber && (
                    <Card className="mt-4">
                      <Card.Body>
                        <h5>Tracking Information</h5>
                        <div className="mb-3">
                          <strong>Tracking Number:</strong>{" "}
                          {selectedOrder.trackingNumber}
                        </div>
                        {selectedOrder.estimatedDelivery && (
                          <div>
                            <strong>Estimated Delivery:</strong>{" "}
                            {new Date(
                              selectedOrder.estimatedDelivery
                            ).toLocaleDateString()}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  )}
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Orders;
