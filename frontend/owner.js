

 const contentArea = document.getElementById("content-area");

  // Dummy data
//  let properties = [
//     { index: 1, image: "https://via.placeholder.com/50", title: "Luxury Condo", price: "12M Birr", status: "Active" },
//     { index: 2, image: "https://via.placeholder.com/50", title: "Office Space", price: "18M Birr", status: "Pending" },
// ];

const inquiries = [
    { buyer: "adane desta", property: "Luxury Apartment", message: "Is this available?", date: "2025-04-25" },
    { buyer: "abriham petros ", property: "Office Space", message: "Interested in a tour.", date: "2025-04-26" },
];

 // Function to load Manage Properties

 async function loadManageProperties() {

    const response = await fetch(`http://localhost:5200/api/getProperties`);

    if(response.ok){

        const properties = await response.json()

    contentArea.innerHTML = `
      <h1>Manage Properties</h1>
      <table>
          <thead>
              <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>

          ${properties.map(property => `
          
          <tr>

          <td><img src= "${property.image_path ? property.image_path : '/images/property_7_1747834862129_0.png'}" alt="property image"/></td>
          <td>${property.title}</td>
          <td>${property.price}</td>
          <td>${property.status}</td>
          <td>
          <button class="edit-btn" onclick='editProperty(${JSON.stringify(property).replace(/"/g, "&quot;")})'>Edit</button>
          <button class="delete-btn" onclick='deleteProperty(${JSON.stringify(property).replace(/"/g, "&quot;")})'>Delete</button>
           </td>
          
          </tr>

          `).join('')}
          
          </tbody>
      </table>
  `
 }else{
    alert(`${response.json().error}`)
 }

  
}

document.addEventListener("DOMContentLoaded", function() {
  
  const links = document.querySelectorAll(".sidebar nav ul li a");

  // Load initial page
  loadDashboard();

  // Add click event to sidebar links
  links.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const page = link.getAttribute("data-page");

          switch (page) {
              case "dashboard":
                  loadDashboard();
                  break;
              case "add-property":
                  loadAddProperty();
                  break;
              case "manage-properties":
                  loadManageProperties();
                  break;
              case "inquiries":
                  loadInquiries();
                  break;
              case "profile-settings":
                  loadProfileSettings();
                  break;
              case "subscription":
                  loadSubscription();
                  break;
              case "logout":
                  alert("Logging out...");
                  break;
          }
      });
  });

  // Function to load the dashboard
  function loadDashboard() {
      contentArea.innerHTML = `
          <h1>Dashboard Overview</h1>
          <div class="stats">
              <div class="stat-card"><h3>24</h3><p>Total Properties</p></div>
              <div class="stat-card"><h3>10</h3><p>Sold</p></div>
              <div class="stat-card"><h3>4</h3><p>Pending</p></div>
              <div class="stat-card"><h3>15</h3><p>Inquiries</p></div>
          </div>
          <div class="recent-inquiries">
              <h2>Recent Inquiries</h2>
              <table>
                  <thead>
                      <tr>
                          <th>Buyer</th>
                          <th>Property</th>
                          <th>Message</th>
                          <th>Date</th>
                      </tr>
                  </thead>
                  <tbody id="inquiry-table-body"></tbody>
              </table>
          </div>
      `;

      const tbody = document.getElementById("inquiry-table-body");
      inquiries.forEach(inquiry => {
          tbody.innerHTML += `
              <tr>
                  <td>${inquiry.buyer}</td>
                  <td>${inquiry.property}</td>
                  <td>${inquiry.message}</td>
                  <td>${inquiry.date}</td>
              </tr>
          `;
      });
  }

  // Function to load Add Property form
  function loadAddProperty() {
      contentArea.innerHTML = `
          <h1>Add New Property</h1>
          <div class="form-card">
              <form id="add-property-form" class="property-form grid-form">
                  <h3>Basic Information</h3>
                  <div class="form-grid">
                      <input type="text" id="property-title" placeholder="Property Title" required class="form-input">
                      <select id="property-type" required class="form-input">
                          <option value="">Select Property Type</option>
                          <option>Apartment</option>
                          <option>Villa</option>
                          <option>Land</option>
                          <option>Commercial</option>
                      </select>
                      <select id="property-status" required class="form-input">
                          <option value="">For :</option>
                          <option value="sell">For Sale</option>
                          <option value="rent">For Rent</option>
                      </select>
                  </div>
                  <textarea id="property-description" placeholder="Property Description" required class="form-input full-width"></textarea>

                  <h3>Location</h3>
                  <div class="form-grid">

                      <input type="text" id="property-address" placeholder="Address" required class="form-input">
                      <input type="text" id="property-kebele" placeholder="Kebele" required class="form-input">
                      <input type="text" id="property-spLocation" placeholder="specific location" required class="form-input">
                      
                  </div>

                  <h3>Pricing</h3>
                  <div class="form-grid">
                      <input type="number" id="property-price" placeholder="Price (ETB)" required class="form-input">
                      <select id="property-negotiable" required class="form-input">
                          <option value="">Negotiable?</option>
                          <option>Yes</option>
                          <option>No</option>
                      </select>
                  </div>

                  <h3>Details</h3>
                  <div class="form-grid">
                      <input type="number" id="property-bedrooms" placeholder="Bedrooms" required class="form-input">
                      <input type="number" id="property-bathrooms" placeholder="Bathrooms" required class="form-input">
                      <input type="number" id="property-area" placeholder="Area (sqm)" required class="form-input">
                      <input type="number" id="property-year" placeholder="Year Built" required class="form-input">
                  </div>

                  <h3>Media</h3>
                  <input type="file" id="property-images" multiple class="form-input full-width">

                  <div class="form-action">
                      <button type="submit" class="submit-btn">Submit Property</button>
                  </div>
              </form>
          </div>
      `;

      // Form submission event
      const form = document.getElementById("add-property-form");
      form.addEventListener("submit", async(e) => {
          e.preventDefault();
          
    // Gather data from the form
    const formData = new FormData();
    const imageInput = document.getElementById("property-images");
    
    // Appending all form fields
    formData.append("title", document.getElementById("property-title").value);
    formData.append("type", document.getElementById("property-type").value);
    formData.append("for", document.getElementById("property-status").value);
    formData.append("description", document.getElementById("property-description").value);
    formData.append("address", document.getElementById("property-address").value);
    formData.append("kebele", document.getElementById("property-kebele").value);
    formData.append("sp_location", document.getElementById("property-spLocation").value);
    formData.append("price", document.getElementById("property-price").value);
    formData.append("negotiable", document.getElementById("property-negotiable").value);
    formData.append("bedrooms", document.getElementById("property-bedrooms").value);
    formData.append("bathrooms", document.getElementById("property-bathrooms").value);
    formData.append("area", document.getElementById("property-area").value);
    formData.append("year", document.getElementById("property-year").value);
    
    // Append all selected images
    for (let i = 0; i < imageInput.files.length; i++) {
        formData.append("property-images", imageInput.files[i]);
    }

    try {
        const response = await fetch(`http://localhost:5200/api/newproperty`, {
            method: 'POST',
            body: formData
            
        });

        const data = await response.json();

        if (response.ok) {
            alert('New property uploaded successfully');
        } else {
            alert(data.error || 'Error uploading property');
        }
    } catch (error) {
        alert('Error uploading property: ' + error.message);
    }

    // Reload the Manage Properties page
    loadManageProperties();
});

  }

 
  // Function to load Inquiries
  function loadInquiries() {
      contentArea.innerHTML = `
          <h1>Inquiries</h1>
          <table>
              <thead>
                  <tr>
                      <th>Buyer Name</th>
                      <th>Property</th>
                      <th>Message</th>
                      <th>Date</th>
                  </tr>
              </thead>
              <tbody id="all-inquiries-body"></tbody>
          </table>
      `;

      const tbody = document.getElementById("all-inquiries-body");
      inquiries.forEach(inquiry => {
          tbody.innerHTML += `
              <tr>
                  <td>${inquiry.buyer}</td>
                  <td>${inquiry.property}</td>
                  <td>${inquiry.message}</td>
                  <td>${inquiry.date}</td>
              </tr>
          `;
      });
  }

  // Function to load Profile Settings
  function loadProfileSettings() {
      contentArea.innerHTML = `
          <h1>Profile Settings</h1>
          <form class="property-form">
              <input type="text" placeholder="Company Name" required class="form-input"><br>
              <input type="email" placeholder="Email Address" required class="form-input"><br>
              <input type="text" placeholder="Phone Number" required class="form-input"><br>
              <textarea placeholder="Company Description" class="form-input"></textarea><br>
              <button type="submit" class="submit-btn">Save Changes</button>
          </form>
      `;
  }

  // Function to load Subscription & Billing
  function loadSubscription() {
      contentArea.innerHTML = `
          <h1>Subscription & Billing</h1>
          <p>Current Plan: <strong>Premium</strong></p>
          <p>Next Billing Date: 2025-05-30</p>
          <button class="submit-btn">Upgrade Plan</button>
      `;
  }
});

//function to delete property
function deleteProperty(index) {
  if (confirm("Are you sure you want to delete this property?")) {
      properties.splice(index, 1); // Remove 1 item at position 'index'
      loadManageProperties(); // Reload the table
  }
}

//function to update property

function editProperty(property) {

    console.log(property)
  // Show a simple edit form
  contentArea.innerHTML = `
      <h1>Edit Property</h1>
      <div class="form-card">
          <form id="edit-property-form" class="property-form">
              <input type="text" id="edit-title" value="${property.title}" class="form-input" required><br>
              <input type="text" id="edit-price" value="${property.price}" class="form-input" required><br>
              <select id="edit-status" class="form-input" required>
                  <option value="Active" ${property.status === "Active" ? "selected" : ""}>Active</option>
                  <option value="Pending" ${property.status === "Pending" ? "selected" : ""}>Pending</option>
                  <option value="Sold" ${property.status === "Sold" ? "selected" : ""}>Sold</option>
              </select><br>
              <button type="submit" class="submit-btn">Save Changes</button>
          </form>
      </div>
  `;

  const form = document.getElementById("edit-property-form");
  form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Update the property
      property.title = document.getElementById("edit-title").value;
      property.price = `$${document.getElementById("edit-price").value}`;
      property.status = document.getElementById("edit-status").value;

      // Reload Manage Properties page
      loadManageProperties();
  });
}
