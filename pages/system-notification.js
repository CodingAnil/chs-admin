import { Fragment, useState } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import SystemNotificationList from "../components/system-notification-list";
import { NotificationData } from "../utils/constants";
import NotificationList from "../components/notification-list";

const SystemNotification = () => {
  const [notifications, setNotifications] = useState(NotificationData);
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 10;

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const totalPages = Math.ceil(notifications.length / notificationsPerPage);
  const currentNotifications = notifications.slice(
    (currentPage - 1) * notificationsPerPage,
    currentPage * notificationsPerPage
  );
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Card>
            <CardHeader className="table-card-header">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0 text-lg">System Notification</h3>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <SystemNotificationList />
            </CardBody>
          </Card>
          <NotificationList
            notifications={currentNotifications}
            markAsRead={markAsRead}
          />
        </Container>
      </div>
    </Fragment>
  );
};
export default SystemNotification;
