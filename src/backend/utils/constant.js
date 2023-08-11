import dayjs from "dayjs";
import jwtDecode from "jwt-decode";


export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
export const secretcode = "secretcode";

export const requiresAuth = function (request) {
    const encodedToken = request.requestHeaders.authorization;
    const decodedToken = jwtDecode(encodedToken);
    if (decodedToken) {
      const user = this.db.users.findBy({ email: decodedToken.email });
      if (user) {
        return user._id;
      }
    }
    return new Response(
      401,
      {},
      { errors: ["The token is invalid. Unauthorized access error."] }
    );
  };