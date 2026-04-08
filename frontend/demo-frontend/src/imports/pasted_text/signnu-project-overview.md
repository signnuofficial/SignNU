PROJECT DESCRIPTION
SignNU is a high-efficiency workflow automation system designed to digitize and accelerate the lifecycle of university administrative processes, such as ACPs, RFPs, and Meal Requests. Built on a modern React and MongoDB architecture, the platform replaces traditional paper trails with dynamic form submissions, automated approval routing, and secure attachment management. The system’s standout feature is the "Hassle-Free QR Handshake," which allows busy signatories to scan a secure, confidential code and apply an electronic signature via a mobile fingertip canvas with no login required. To further streamline decision making, SignNU integrates AI generated assessments that provide instant summaries and policy compliance checks, ensuring that even the most complex institutional requests are processed with speed, transparency, and a tamper-proof digital audit trail.
TARGET USERS AND STAKEHOLDERS
1. Primary Stakeholders
A. The Requesters
·       Who: Student leaders, organization officers, and teaching staff.
Need: A fast way to submit ACPs or Meal Requests without walking around campus for days.
Tech Interaction: Uses the React dashboard to fill dynamic forms, upload attachments, and track the live "Approval Map."
B. The Approvers
Who: Deans, Department Heads and Officers.
Need: To sign documents instantly between meetings without logging into a complex system.
Tech Interaction: Scans the SignNU QR, reviews the AI Summary, and uses the "Tap-to-Sign" mobile handshake.
C. The Administrative Staff
Who: Secretaries, Office Assistants, and Treasurers.
Need: To organize, filter, and verify that all attachments (RFP quotes, guest lists) are present.
Tech Interaction: Manages the "Inbox," nudges slow approvers, and downloads the final "Stamped" PDFs from MongoDB.
2. Technical & Institutional Stakeholders
D. The IT Department (System Admins)
Who: University IT or Dev Team.
Need: A system that is easy to maintain, scalable (MongoDB), and secure (JWT/RBAC).
Tech Interaction: Manages user roles, updates form templates and monitors the Audit Trail for security anomalies.


CORE FEATURES
Suggested Workflow
At its core, Auto-Notifications utilize push services to instantly alert the "Next Person" the moment their signature is required, eliminating the typical wait times associated with manual follow-ups. To keep the process moving, the "Nudge" feature allows requesters to trigger a gentle reminder through Node.js, providing a polite way to stay on the radar of busy administrators. Furthermore, the system is built for institutional complexity through Parallel Approval logic; by storing an Array of Signatures in MongoDB, the platform can handle scenarios where multiple officials, such as two Co-Deans or a Department Head and a Treasurer, must provide their authorization before the document can advance to its final stage.
Role-based access/privilege
Assign user accounts to a specific role, they are given privileges such as the scope of their access.
Requester - upload forms, modify areas to sign and request to specific people.
Signatory - accept or reject requested forms requiring their signature to be notified to them. No editing access.
Reviewer - view only/observer 
Admin - Manage roles forms and flow


On-The-Go No Login Signature
To handle urgent Meal Requests, a secure alternative without needing logging in can be implemented. The owner of the file can send a secure QR code to the requested person. The requested person scans the SignNU QR with their phone. A signature modal on the phone will show which will upload the sign only needing to tap the designated sign area. To make this possible we can implement it with; Single-Use Session Token, upon activating the QR by scanning, the QR only has a 10-minute usage for security, this requires no sign in.  This is followed by a mobile touch to sign, upon opening the QR code on a mobile device it will show a signature canvas for the user to sign.
PROPOSED AI INTEGRATION
Possible AI Implementation
1. AI generated form summary - Instead of scrolling through multiple pages to seek context, show a summarized version to catch the attention of the reader such as TLDR (Too Long Didn’t Read). To make this possible we can use the free tier of Gemini 1.5 Flash for text summary. Gemini Flash is able to generate summaries based on extensive documents (Carceres 2024).
INITIAL SYSTEM CONCEPT / WORKFLOW
1. Digitized Form Submission
Template Mapping: When a user selects "ACP," the React frontend pulls the specific fields from a MongoDB Templates collection.
Field Validation: Unlike paper, the "Submit" button stays disabled until all required fields (e.g., Budget Code, Event Date) are filled correctly.
2. Digital Attachment Management
Required documents (e.g., Vendor Quotes for an RFP or a Guest List for an ACP) are treated as first-class citizens.
Cloud Storage: React handles the file upload (PDF/JPG) to a storage bucket (like AWS S3 or Cloudinary).
Database Link: MongoDB stores the metadata (URL, File Size, Upload Date) inside the form document.
Unified View: When the Dean scans the QR code, they see a "View Attachments" button on their phone, allowing them to review the quotes before tapping to sign.
3. Automated Approval Routing
The "Next Desk" Logic: Once the Requester hits submit, the system looks at the workflow Path. It automatically notifies the Dept. Head.
Status Tracking: The form moves through states: Draft → Pending Dept Head → Pending Dean → Approved.
Parallel Processing: If an RI (Requisition Inventory) needs both Warehouse and Finance approval, the system sends notifications to both simultaneously to save time.
4. Electronic Signatures
This is your SignNU QR Handshake. It turns a "Submission" into a "Legal Record."
Marker Placement: the user can set "Markers" on the uploaded document.
The Handshake: The Signatory uses the QR to access the "Sign Area" without logging in.
Flattening: Once the final signature is collected, the backend uses pdf-lib to merge the JSON data, the attachments, and the signature images into one Final Flattened PDF.
Allow download of the pdf when only finalized.
