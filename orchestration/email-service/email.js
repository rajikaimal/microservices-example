const emailService = ({ to, from }) => {
    if(to && from)
        return Promise.resolve();
    else
        return Promise.reject();
}

module.exports = emailService;