# Programming Test
The purpose of this programming test is to gauge your ability to develop a full-stack application. This test should be performed in one session. Please keep a record of the time it took to complete this test. We use the honor system, so please report your actual hours. Taking the time to be thorough and test your work is critical, and lengthy time will not necessarily reflect poorly on your evaluation. 

## Scope of Work
Please develop a single page application using the provided database and HTML file. Your code should dynamically build the page and page elements and perform filtering on a list of products, by their product attributes. On initial load, the page should load all products from the database category "Dry Dog Food" as a list of cards in the main area of the page, as seen in the example HTML file. The category has associated attributes that should be rendered on the left side of the page as filter headers. Under each header, checkboxes of distinct product attribute values should be listed and sorted low to high, or A-Z depending on the attribute value. A product manufacturer filter should be included as well. Clicking on any checkbox should filter the list of products, showing only products that contain the selected attribute and value. The filters that are no longer found in the resulting product set should become disabled, since they are no longer relevant. Unchecking a checkbox will update the product set and filter states. Multiple filter values may be checked. Please update the product count above the filters as the product result set is updated.

The following components of this test application are required, and must be implemented using the technologies listed in each component.

### Database
Please use the PostgreSQL database provided to you with the following credentials:
**Database URL:** ziggy.db.elephantsql.com
**User & Default Database:** zxsowqnh
**Password:** MQKIFor8Xs3RRHAgtM5_EAWQG6rntvdf

### API
Please use NodeJS and Express to develop an API that retrieves the required data from the database and passes it to the VueJS app.

### VueJS UI
Please use VueJS and Typescript to create the reactive user-interface for this application.

### Package Manager
Please use NPM to install add packages and to provide the means to run each project in a test environment.

## Completion and Delivery
Please commit the changes in your branch and create a pull request for review.

Thank you for your interest in working with MCG Strategic. We look forward to evaluating your work. Please direct all questions to joe.mcgarvey@mcgstrategic.com.	
