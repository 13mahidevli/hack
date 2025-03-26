import React, { useEffect, useState } from "react";
import "../App.css"; // Import CSS file

export default function NotificationPage() {
  // Simulated dates (You can replace this with dynamic data)
  const disposalDate = new Date().toLocaleDateString();
  const pickupDate = new Date();
  pickupDate.setDate(pickupDate.getDate() + 3); // Pickup after 3 days
  const expectedPickupDate = pickupDate.toLocaleDateString();

  return (
    <div className="notification-container">
      <h1 className="notification-heading">🔔 Notification</h1>
      <p className="notification-message">✅ Item disposed on <strong>{disposalDate}</strong></p>
      <p className="notification-message">🚛 Expected pickup on <strong>{expectedPickupDate}</strong></p>
    </div>
  );
}
