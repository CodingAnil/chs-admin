const NotificationList = ({ notifications }) => {
  return (
    <div className="bg-white text-secondprimary py-5 rounded-lg shadow-md w-full  my-6">
      <div className="flex justify-between items-center mb-4 px-5">
        <h2 className="text-xl font-medium text-primary ">Notification</h2>
      </div>
      <div className="block px-4">
        <div className="block border-t border-[#dfe3e8]">
          {notifications.length === 0 ? (
            <div className="min-h-60 flex justify-center items-center">
              <p className="text-[#A6A6A6] text-center text-sm font-medium">
                No notifications
              </p>
            </div>
          ) : (
            notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`border-b cursor-pointer last-of-type:border-none last-of-type:pb-0  py-4.5 px-6 flex flex-wrap  sm:flex-nowrap sm:justify-between items-center w-full ${
                  notification.read ? "border-darkGrey100" : " border-[#dfe3e8]"
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="w-full mb-0">
                  <h5 className="text-secondprimary] text-sm font-medium mb-2">
                    {notification.message}
                  </h5>
                  <p className="text-[#A6A6A6] text-xs font-medium">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default NotificationList;
