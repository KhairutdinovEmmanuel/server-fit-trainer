import { CorsOptions } from "cors";

const corsConfig: CorsOptions = {
	origin: ["http://localhost:3000", "http://localhost:8080"],
	credentials: true,
};

export default corsConfig;
