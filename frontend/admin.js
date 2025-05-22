
        // Get elements
        const requestsnav = document.getElementById('requests-nav');
        const feedbacksnav = document.getElementById('feedbacks-nav');
        const companynav = document.getElementById('company-nav');
        const propertiesnav = document.getElementById('properties-nav');
        const usersnav = document.getElementById('users-nav');
        const analyticsnav = document.getElementById('analytics-nav');
        const contentArea = document.getElementById('contentArea');
        const modal = document.getElementById('modal');
        let activeSection = ''; // Track active section

        
        //Dummy Data

        // let users = [
        //     { name: "adane desta", email: "adane@example.com", phone: "0987654321" },
        //     { name: "abriham petros", email: "abrham@example.com", phone: "0953647586" },
        // ];
        
        let companies = [
            { name: "Gift real estate", email: "giftrealestate@fake.com" },
            { name: "Hayat real estate", email: "hayatrealestate@fake.com" },
        ];
        
        let properties = [
            { Owner: "Gift real estate", type: "appartment", location: "Hawassa" , price: "750K Birr" , status: "available"},
            { Owner: "Hayat real estate", type: "appartment", location: "Addis Ababa" , price: "1.2M  Birr" , status: "available"},
        ];
        
        let feedbacks = [
            { user: "abriham petros", email: "abrham@example.com", feedback: "complaints or feedback" },
            { user: "adane desta", email: "adane@fake.com", feedback: "complaints or feedback" },        ];
        
        let requests = [
            { Owner: "Gift real estate", type: "appartment", location: "Hawassa" , price: "750K Birr" , payment: "paid"},
            { Owner: "Hayat real estate", type: "appartment", location: "Addis Ababa" , price: "1.2M  Birr" , payment: "pending"},
        ];

        // show Analytics page at start
           
        analyticsnav.addEventListener('click' , async() =>{
            showAnalytics()
        });


        const showAnalytics = async() => {

            contentArea.innerHTML = `

            
            
            
            
                <div class="scroll-container">
                    <h1 class="dashboard-title">EthioNest Analytics</h1>
            
                    <div class="property-info">
            
                        <!-- USERS INFO -->
                        <div class="analytics_card">
                            <div class="card-header">Registered Users</div>
                            <div class="card-content">
                                <div class="card-value">8.5K</div>
                                <div class="card-subtitle">Buyers & Sellers</div>
                            </div>
                        </div>
            
                        <div class="analytics_card">
                            <div class="card-header">Active Agencies</div>
                            <div class="card-content">
                                <div class="card-value">120</div>
                                <div class="card-subtitle">Partnered Real Estate Companies</div>
                            </div>
                        </div>
            
                        <!-- PROPERTIES INFO -->
                        <div class="analytics_card">
                            <div class="card-header">Listed Properties</div>
                            <div class="card-content">
                                <div class="card-value">3.2K</div>
                                <div class="card-subtitle">Total Properties Listed</div>
                            </div>
                        </div>
            
                        <div class="analytics_card">
                            <div class="card-header">Properties Sold</div>
                            <div class="card-content">
                                <div class="card-value">950</div>
                                <div class="card-subtitle">Successful Transactions</div>
                            </div>
                        </div>
            
                        <!-- MARKET DATA -->
                        <div class="analytics_card">
                            <div class="card-header">Top Listing Price</div>
                            <div class="card-content">
                                <div class="card-value-small">85M Birr</div>
                                <img src="images/top-expensive.jpeg" alt="Top Listing">
                            </div>
                        </div>
            
                        <div class="analytics_card">
                            <div class="card-header">Lowest Listing Price</div>
                            <div class="card-content">
                                <div class="card-value-small">150K Birr</div>
                                <img src="images/lowest-expensive.jpeg" alt="Lowest Listing">
                            </div>
                        </div>
            
                        <!-- PLATFORM ENGAGEMENT -->
                        <div class="analytics_card">
                            <div class="card-header">Platform Views</div>
                            <div class="card-content">
                                <div class="card-value">1.2M</div>
                                <div class="card-subtitle">Monthly Site Visits</div>
                            </div>
                        </div>
            
                        <div class="analytics_card">
                            <div class="card-header">Inquiries Received</div>
                            <div class="card-content">
                                <div class="card-value">4.6K</div>
                                <div class="card-subtitle">Buyer Messages Sent</div>
                            </div>
                        </div>
            
                    </div>
                </div>
               
            `
        };




        // Show users section


        usersnav.addEventListener('click', () => {
            activeSection = 'users';
            getusers();

             
        });

         

       const getusers = async () =>{

        const response = await fetch(`http://localhost:5200/api/getusers`)

        const users = await response.json();
             
        

            contentArea.innerHTML = `
                <div class="section-title">Manage Users</div>
                <div class="card">
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody> 
                         ${users.map(user => `
                                <tr>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                                <td>${user.role}</td>
                                <td>
                                    <button class="action-btn accept" onclick="acceptAppointment()">Block Acct.</button>
                                    <button class="action-btn reject" onclick="rejectAppointment()">Delete</button>
                                </td>
                            </tr> `
                            ).join('')}
                        
                        </tbody>
                    </table>
                </div>
            `;
            
        };

        // Show companies section
        companynav.addEventListener('click', () => {
            contentArea.innerHTML = `
                <div class="section-title">Manage Companies</div>
                <div class="card">
                    <table>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${companies.map(company => `

                               <tr> 
                                 <td>${company.name}</td>
                                 <td>${company.email}</td>
                                 <td>
                                 <button class="action-btn accept" onclick="acceptAppointment()">See More</button>
                                 <button class="action-btn reject" onclick="rejectAppointment()">Delete</button>
                                 </td>
                            `).join('')

                            }
                        </tbody>
                    </table>
                </div>
            `;
            activeSection = 'companies';
        });

        // Show properties section
        propertiesnav.addEventListener('click', () => {
            contentArea.innerHTML = `
                <div class="section-title">Manage Properties</div>
                <div class="card">
                    <table>
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>type</th>
                                <th>price</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${
                                properties.map(property => `
                                     
                                 <tr>
                                  <td>${property.Owner}</td>
                                  <td>${property.type}</td>
                                  <td>${property.price}</td>
                                  <td>${property.location}</td>
                                  <td>${property.status}</td>
                                  <td>
                                  <button class="action-btn accept" onclick="acceptAppointment()">See More</button>
                                  <button class="action-btn reject" onclick="rejectAppointment()">Delete</button>
                                  </td>
                                `).join('')
                            }
                        </tbody>
                    </table>
                </div>
            `;
            activeSection = 'properties';
        });

        // Show feedback section
        feedbacksnav.addEventListener('click', () => {
            contentArea.innerHTML = `
                <div class="section-title">Feedbacks and Complains</div>
                <div class="card">
                    <table>
                        <thead>
                            <tr>
                                <th>user</th>
                                <th>email</th>
                                <th>feedback/complain</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${
                                feedbacks.map(feedback => `
                                  <tr>
                                   <td>${feedback.user}</td>
                                   <td>${feedback.email}</td>
                                   <td>${feedback.feedback}</td>
                                   <td>
                                   <button class="action-btn accept" onclick="acceptAppointment()">Done</button>
                                   </td>
                                `).join('')
                            }
                        </tbody>
                    </table>
                </div>
            `;
            activeSection = 'news';
        });

        // Show request section
        requestsnav.addEventListener('click', () => {
            contentArea.innerHTML = `
                <div class="section-title">Requests to List new Properties</div>
                <div class="card">
                    <table>
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${
                                requests.map( request => `
                                
                                  <tr>
                                   <td>${request.Owner}</td>
                                   <td>${request.type}</td>
                                   <td>${request.price}</td>
                                   <td>${request.location}</td>
                                   <td>${request.payment}</td>
                                   <td>
                                   <button class="action-btn accept" onclick="acceptAppointment()">Approve</button>
                                   <button class="action-btn reject" onclick="rejectAppointment()">Reject</button>
                                `).join('')
                            }
                        </tbody>
                    </table>
                </div>
            `;
            activeSection = 'resources';
        });

        // Handle accepting an appointment
        function acceptAppointment() {
            alert('Appointment Accepted!');
            
        }

        // Handle rejecting an appointment
        function rejectAppointment() {
            alert('Appointment Rejected!');
            
        }

   