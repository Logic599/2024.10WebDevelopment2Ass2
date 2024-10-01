const sql = {
    //Using SQL syntax to query data
    selectCategory: 'select * from category',
    selectOrganizer: 'select organizer from fundraiser',
    selectCity: 'select city from fundraiser',
    //This code is used to filter out active fundraising projects. Only active projects will be displayed on the website.
    //If you change the Active column in the SQL database to 0 or something else that is not 1,
    //that fundraising event will not be displayed.
    selectData: `select fundraiser.*, category.name
                                from category
                                join fundraiser on fundraiser.category_id = category.category_id
                                where
                                (fundraiser.active = 1)
                                and (fundraiser.category_id = ? or ? = '')
                                and (fundraiser.organizer = ? or ? = '')
                                and (fundraiser.city = ? or ? = '')`,
    //Below statement is designed to retrieve detailed information about a specific fundraiser
    //It is mainly used to filter out the detailed information that users want to view from the database
    //When the user clicks the View button on the Fundraiser page :)
    selectDetail: `select fundraiser.*, category.name
                                from category
                                join fundraiser on fundraiser.category_id = category.category_id
                                where fundraiser.fundraiser_id = ?`,
};
module.exports = sql;