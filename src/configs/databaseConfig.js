import mangoose from "mongoose";

const connectDb = async () => {
	try {
		await mangoose.connect(process.env.DB_URI, {
			dbName: process.env.DB_NAME,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const db = mangoose.connection;
		db.on("error", (error) => console.log(error));
		db.once("open", () => console.log(`Database connect to server: ${db.host}`));
	} catch (error) {
		console.info(error);
	}
};

export default connectDb;
