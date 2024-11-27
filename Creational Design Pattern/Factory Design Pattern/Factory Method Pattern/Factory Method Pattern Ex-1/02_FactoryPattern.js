// Product Interface
class Notification {
    send(message) {
      throw new Error("Method 'send()' must be implemented.");
    }
  }
  
  // Concrete Products
  class EmailNotification extends Notification {
    send(message) {
      console.log(`Sending Email: ${message}`);
    }
  }
  
  class SMSNotification extends Notification {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  // Creator (Abstract Class)
  class NotificationFactory {
    createNotification() {
      throw new Error("Method 'createNotification()' must be implemented.");
    }
  
    sendNotification(message) {
      const notification = this.createNotification();
      notification.send(message);
    }
  }
  
  // Concrete Creators
  class EmailNotificationFactory extends NotificationFactory {
    createNotification() {
      return new EmailNotification();
    }
  }
  
  class SMSNotificationFactory extends NotificationFactory {
    createNotification() {
      return new SMSNotification();
    }
  }
  
  // Client Code
  const emailFactory = new EmailNotificationFactory();
  emailFactory.sendNotification("Hello via Email!");
  // Output: Sending Email: Hello via Email!
  
  const smsFactory = new SMSNotificationFactory();
  smsFactory.sendNotification("Hello via SMS!");
  // Output: Sending SMS: Hello via SMS!
  