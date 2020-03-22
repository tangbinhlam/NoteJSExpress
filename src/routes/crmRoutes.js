import {addnewContact, deleteContact, getContacts, getContactWithID, updateContact} from '../controllers/crmController';

const routes = (app) => {
    app.route('/api/v1/contacts')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)

        // Post endpoint
        .post(addnewContact);

    app.route('/api/v1/contacts/:contactID')
        // get a specific contact
        .get(getContactWithID)

        // updating a specific contact
        .put(updateContact)

        // deleting a specific contact
        .delete(deleteContact);
};

export default routes;
