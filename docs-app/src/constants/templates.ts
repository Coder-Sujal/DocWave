export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
     <h1>SOFTWARE DEVELOPMENT PROPOSAL</h1>
  <p><strong>Prepared for:</strong> Client's name</p>
  <p><strong>Client's company name</strong></p>
  <p><strong>Prepared by:</strong> Your name</p>
  <p>Your company name</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Name</h1>
  <p><strong>Date:</strong> 09.04.20XX</p>
  <p>Your Name</p>
  <p>Your Company</p>
  <p>123 Your Street<br>Your City, ST 12345</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h2>Your Company</h2>
  <p>123 Your Street<br>Your City, ST 12345<br>Tel: 555-555-5555<br>Email: youremail@example.com</p>
  <p>September 24, 20XX</p>
  <p>Dear [Recipient Name],</p>
  <p>Thank you for your interest in our services. We are pleased to provide you with our latest product offerings. Our team has extensive experience in business solutions. We look forward to discussing this opportunity further. Please contact us if you have any questions.</p>
  <p>Sincerely,<br>Your Name</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<h1>Your Name</h1>
  <p>123 Your Street, Your City, ST 12345<br>Email: your.email@example.com</p>

  <h2>Skills</h2>
  <ul>
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
  </ul>

  <h2>Experience</h2>
  <p><strong>Company Name</strong>, Location — Job Title<br>Month 20XX - Month 20XX</p>
  <ul>
    <li>Key responsibility or achievement</li>
  </ul>

  <h2>Education</h2>
  <p>College Name, Location — Degree</p>

  <h2>Awards</h2>
  <p>Notable achievement or recognition</p>`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<h1>Your Name</h1>
  <p>123 Your Street<br>Your City, ST 12345<br>Email: your.email@example.com</p>
  <p>September 24, 20XX</p>

  <p>Hiring Manager<br>Company Name<br>123 Company Street<br>Company City, ST 12345</p>

  <p>Dear Hiring Manager,</p>
  <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my experience and skills, I am confident I would be a valuable addition to your team.</p>
  <p>Sincerely,<br>Your Name</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<h1>Your Band</h1>
  <p><strong>Date:</strong> September 24, 20XX</p>
  <p><strong>Hello fan,</strong></p>
  <p>First, a big thank you!</p>
  <p>Thanks for being such an amazing supporter of our music. We're excited to announce our new album is coming soon. You'll be the first to hear our latest singles.</p>
  <p>We're planning something special for our loyal fans. Stay tuned for exclusive content and updates. Can't wait to see you at our next show.</p>
  <p>Lots of love,<br>Your Name</p>`,
  },
];
