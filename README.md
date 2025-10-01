# Swipe AI Interview Assistant
# Swipe AI Interview Assistant

A **React + Redux + Ant Design** web app that simulates an **AI-powered interview assistant**.  
Candidates can upload resumes, answer timed interview questions, and interviewers can view results in a dashboard.

---

## **Features**

### Interviewee
- Upload resume (PDF/DOCX)  
- Extract and fill missing details (Name, Email, Phone)  
- Timed interview with 6 questions:  
  - 2 Easy (20s each)  
  - 2 Medium (60s each)  
  - 2 Hard (120s each)  
- Answers automatically submitted after time expires  
- Final score and summary generated  

### Interviewer
- Dashboard with list of candidates and scores  
- View each candidate's chat history and details  
- Search and sort functionality  

---

## **Tech Stack**
- React 18 + TypeScript  
- Redux Toolkit  
- Ant Design  
- Vite  
- uuid (for unique IDs)  

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/gracy2004/interviewChat.git
cd interviewChat
