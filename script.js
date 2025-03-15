document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const links = document.querySelectorAll('.sideBar ul li a');

    const content = {
        dashboard: `
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard. Here you can see an overview of your finances.</p>
        `,
        transactions: `
            <h1>Transactions</h1>
            <p>Here you can view and manage your transactions.</p>
        `,
        goals: `
            <h1>Goals</h1>
            <p>Set and track your financial goals here.</p>
        `,
        budget: `
            <h1>Budget</h1>
            <p>Manage your budget and track your spending.</p>
        `,
        insights: `
            <h1>Insights</h1>
            <p>Get insights into your financial habits and trends.</p>
        `
    };

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
            // Update main content
            const contentKey = this.id.split('-')[0];
            mainContent.innerHTML = content[contentKey];
        });
    });
});