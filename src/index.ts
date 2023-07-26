import {ApiClient} from "./client";

export *  from "./client"

const SharkServersClient = new ApiClient({
    BASE: "http://localhost",
});

export {SharkServersClient}

