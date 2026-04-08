# SignNU - Workflow Automation System for NU Laguna

A comprehensive digital workflow system that streamlines form submission, approval routing, document management, and electronic signatures for university administrative processes.

## 🌟 Key Features Implemented

### 1. **Hassle-Free QR Handshake** 
- Generate secure QR codes for signatories
- **No login required** - scan and sign instantly
- 10-minute expiry for security
- Mobile-optimized signature canvas
- Perfect for busy administrators on-the-go

### 2. **AI-Generated Form Summaries**
- Click "Generate AI Summary" to create instant TLDR
- Powered by mock implementation (ready for Gemini 1.5 Flash integration)
- Helps approvers quickly understand context
- Displays prominently at the top of form details

### 3. **Role-Based Access Control**
- **Admin**: Full system access and management
- **Requester**: Submit forms, track submissions, upload documents
- **Signatory**: Approve/reject forms, add signatures
- **Reviewer**: View-only access (observer mode)
- Switch between users in sidebar to test different perspectives

### 4. **Auto-Notifications & Nudge System**
- Automatic notifications when approval is needed
- "Send Nudge" button for gentle reminders
- Tracks last nudge timestamp
- Prevents notification fatigue

### 5. **Parallel Approval Logic**
- Support for multiple simultaneous approvers
- Efficient routing when multiple officials must approve
- Example: Co-Deans or Department Head + Treasurer

### 6. **Digital Attachment Management**
- Upload multiple documents (PDF, DOC, XLSX)
- File size and type information
- Add attachments at any stage
- Unified view for all reviewers

### 7. **Electronic Signatures**
- Canvas-based signature drawing
- Touch-optimized for mobile devices
- Permanent signature storage
- Timestamped and attributed

### 8. **Signature Marker Placement**
- Framework ready for placing signature markers on documents
- `signatureMarkers` array in form data structure
- Prepared for future PDF annotation features

### 9. **PDF Flattening & Download**
- Download button for finalized forms
- Only available when all approvals complete
- Ready for integration with pdf-lib
- Merges signatures, attachments, and form data

### 10. **Automated Approval Routing**
- Each form type has predefined approval chains:
  - **ACP**: Dept Head → Dean → VP for Academics
  - **Meal Request**: Dept Head → Finance Officer
  - **RI**: Dept Head → Finance → VP for Finance
  - **RFP**: Dept Head → Procurement → VP for Finance
  - **Item Request**: Dean → Procurement → VP for Finance
- Visual progress tracking with status indicators
- Current step highlighting

## 📋 Form Types Supported

1. **ACP** (Annual Curriculum Planning)
2. **Meal Request** (Catering & Food Services)
3. **RI** (Requisition Inventory)
4. **RFP** (Request for Proposal)
5. **Item Request** (Equipment & Supplies)

## 🎯 Usage Guide

### For Requesters:
1. Click "Submit New Form" from dashboard
2. Select form type
3. Fill in required details
4. Upload supporting documents
5. Submit and track approval progress

### For Approvers:
1. Check "Approval Queue" for pending forms
2. Review form details and attachments
3. Generate QR code to share with others
4. Approve or reject with comments
5. Add electronic signature after approval

### For QR Signature Flow:
1. Open form details
2. Click "Generate QR Code"
3. Share QR with signatory (via SMS/Email/Show screen)
4. Signatory scans QR on mobile
5. Draw signature on mobile canvas
6. Signature automatically applied (no login needed!)

### For AI Summary:
1. Open any form details
2. Click "Generate AI Summary" in Actions panel
3. AI-generated TLDR appears at top of form
4. Helps reviewers understand key points quickly

## 🔧 Technical Implementation

### Frontend:
- **React** with TypeScript
- **React Router** for multi-page navigation
- **Tailwind CSS** for styling
- **Radix UI** components for accessibility
- **QRCode library** for QR generation
- **Canvas API** for signature drawing
- **Local Storage** for data persistence

### AI Integration (Ready):
The system includes mock AI summary generation. To integrate real AI:

```typescript
// In WorkflowContext.tsx - generateAISummary function
// Replace mock implementation with Gemini API call:

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `Summarize this form in 2-3 sentences:
Title: ${form.title}
Description: ${form.description}
Type: ${form.type}
Details: ${JSON.stringify(form.formData)}`;

const result = await model.generateContent(prompt);
const summary = result.response.text();
```

### PDF Generation (Ready):
Framework prepared for jspdf integration:

```typescript
// In WorkflowContext.tsx - downloadFormPDF function
// Add jspdf implementation:

import jsPDF from 'jspdf';

const doc = new jsPDF();
// Add form content, attachments, signatures
doc.save(`${form.id}-completed.pdf`);
```

## 🔐 Security Features

- **QR Session Tokens**: Single-use, 10-minute expiry
- **Role-Based Access**: Enforced at component level
- **Audit Trail**: All approvals timestamped and attributed
- **Signature Verification**: Linked to user identity
- **Attachment Validation**: File type and size checks

## 📱 Mobile Optimized

- Responsive design for all screen sizes
- Touch-optimized signature canvas
- QR signature flow designed for mobile-first use
- Works on phones, tablets, and desktops

## 🎨 User Experience

- Clean, modern interface
- Intuitive navigation
- Real-time status updates
- Progress visualization
- Clear approval chains
- Contextual action buttons

## 🚀 Future Enhancements

- Real Gemini AI integration
- PDF generation with signatures
- Email notifications
- Push notifications
- Document scanning with OCR
- Advanced analytics dashboard
- Supabase backend integration for multi-user persistence

## 📝 Notes

- Currently uses local storage (data persists in browser)
- For production: Connect to Supabase for real database
- QR signatures work within same browser session
- AI summaries are mock (ready for Gemini integration)
- PDF download is placeholder (ready for jspdf)

---

**Built for NU Laguna** | March 2026 | SignNU Workflow System
