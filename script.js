function showJobDetails(jobId) {
    const jobDetailsSection = document.getElementById('jobDetails');

    const jobDetails = {
        job1: {
            title: 'Software Engineer',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Develop and maintain software applications</strong></li>
                    <li><strong>Collaborate with cross-functional teams to define, design, and ship new features</strong></li>
                    <li><strong>Write clean, scalable, and efficient code</strong></li>
                </ul>
                <p><strong>Eligibility Criteria:</strong></p>
                <ul>
                    <li><strong>Bachelor's degree in Computer Science or a related field</strong></li>
                    <li><strong>2+ years of experience in software development</strong></li>
                </ul>
                <p><strong>Skills Required:</strong></p>
                <ul>
                    <li><strong>Proficiency in modern programming languages (e.g., JavaScript, Python, Java)</strong></li>
                    <li><strong>Experience with frameworks and libraries (e.g., React, Angular, Django)</strong></li>
                    <li><strong>Strong problem-solving and debugging skills</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        },
        job2: {
            title: 'Data Scientist',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Analyze complex data sets to drive business decisions</strong></li>
                    <li><strong>Develop and implement predictive models</strong></li>
                    <li><strong>Communicate findings and recommendations to stakeholders</strong></li>
                </ul>
                <p><strong>Eligibility Criteria:</strong></p>
                <ul>
                    <li><strong>Master’s degree in Data Science, Statistics, or a related field</strong></li>
                    <li><strong>3+ years of experience in data analysis and modeling</strong></li>
                </ul>
                <p><strong>Skills Required:</strong></p>
                <ul>
                    <li><strong>Proficiency in data analysis tools and languages (e.g., Python, R)</strong></li>
                    <li><strong>Experience with data visualization tools (e.g., Tableau, Power BI)</strong></li>
                    <li><strong>Strong understanding of statistical methods and machine learning algorithms</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        },
        job3: {
            title: 'Product Manager',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Oversee the development and marketing of products</strong></li>
                    <li><strong>Define product vision and strategy</strong></li>
                    <li><strong>Coordinate with engineering, design, and marketing teams</strong></li>
                </ul>
                <p><strong>Eligibility Criteria:</strong></p>
                <ul>
                    <li><strong>Bachelor’s degree in Business, Marketing, or a related field</strong></li>
                    <li><strong>5+ years of experience in product management</strong></li>
                </ul>
                <p><strong>Skills Required:</strong></p>
                <ul>
                    <li><strong>Strong leadership and project management skills</strong></li>
                    <li><strong>Experience with product lifecycle management</strong></li>
                    <li><strong>Excellent communication and negotiation skills</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        },
        job4: {
            title: 'UX Designer',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Create intuitive and engaging user experiences</strong></li>
                    <li><strong>Conduct user research and usability testing</strong></li>
                    <li><strong>Develop wireframes, prototypes, and high-fidelity designs</strong></li>
                </ul>
                <p><strong>Eligibility Criteria:</strong></p>
                <ul>
                    <li><strong>Bachelor’s degree in Design, Human-Computer Interaction, or a related field</strong></li>
                    <li><strong>3+ years of experience in UX design</strong></li>
                </ul>
                <p><strong>Skills Required:</strong></p>
                <ul>
                    <li><strong>Proficiency in design tools (e.g., Adobe XD, Sketch, Figma)</strong></li>
                    <li><strong>Experience with user research methods and usability testing</strong></li>
                    <li><strong>Strong portfolio showcasing UX design projects</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        },
        job5: {
            title: 'Marketing Specialist',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Develop and execute marketing strategies and campaigns</strong></li>
                    <li><strong>Analyze market trends and customer behavior</strong></li>
                    <li><strong>Manage social media and digital marketing efforts</strong></li>
                </ul>
                <p><strong>Eligibility Criteria:</strong></p>
                <ul>
                    <li><strong>Bachelor’s degree in Marketing, Business, or a related field</strong></li>
                    <li><strong>2+ years of experience in marketing</strong></li>
                </ul>
                <p><strong>Skills Required:</strong></p>
                <ul>
                    <li><strong>Proficiency in digital marketing tools and platforms</strong></li>
                    <li><strong>Strong analytical skills and experience with marketing analytics</strong></li>
                    <li><strong>Excellent written and verbal communication skills</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        },
        job6: {
            title: 'Business Analyst',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Analyze business processes and identify improvement opportunities</strong></li>
                    <li><strong>Gather and document business requirements</strong></li>
                    <li><strong>Develop reports and presentations for stakeholders</strong></li>
                </ul>
                <p><strong>Eligibility Criteria:</strong></p>
                <ul>
                    <li><strong>Bachelor’s degree in Business, Economics, or a related field</strong></li>
                    <li><strong>3+ years of experience as a business analyst</strong></li>
                </ul>
                <p><strong>Skills Required:</strong></p>
                <ul>
                    <li><strong>Strong analytical and problem-solving skills</strong></li>
                    <li><strong>Experience with business analysis tools and techniques</strong></li>
                    <li><strong>Excellent communication and documentation skills</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        }
    };

    const job = jobDetails[jobId];
    if (job) {
        jobDetailsSection.innerHTML = `
            <h2>${job.title}</h2>
            ${job.description}
            <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
        `;
    } else {
        jobDetailsSection.innerHTML = '<p>Job details not found.</p>';
    }
}
