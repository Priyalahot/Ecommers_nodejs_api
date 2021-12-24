exports.success = (status,message,data)=>{
    return {
        status:status,
        message:message,
        data,data
    };
};

exports.failure = (status,message,data)=>{
    return {
        status:status,
        message:message,
        data,data
    };
};

