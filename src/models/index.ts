import { connect } from "mongoose";

const { DB_CONNECTION } = process.env;

const connction: Promise<typeof import("mongoose")> = connect(DB_CONNECTION);



connction.then(() => console.log("db connected...")).catch((error) => console.log(error));