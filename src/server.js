import { Response } from "miragejs";
import { Server, Model, RestSerializer } from "miragejs";
import { users } from "./backend/db/users";
import { v4 as uuid } from "uuid";
import { formatDate, secretcode } from "./backend/utils/constant";
import sign from "jwt-encode";

export  default function makeServer({ environment = "development" } = { }) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
     user: Model,
   },
    seeds(server) {

users.forEach((element) => {

        server.create("user", { ...element });

});

},

    routes() {


      this.namespace = "api";

      this.post("/auth/signup", (schema,request ) => {
        const { email, password, ...rest } = JSON.parse(request.requestBody);
        try {
          const foundUser = schema.users.findBy({ email });
          if (foundUser) {

            alert("User Already exist!")
            return new Response(
              422,
              { },
              {
                errors: ["Unprocessable Entity. Email Already Exists."],
              }
            );
          }
          else
          {

            const _id = uuid();
            const newUser = {

              _id,
              email,
              password,
              createdAt: formatDate(),
              updatedAt: formatDate(),
              ...rest

            };

            const createdUser =schema.users.create(newUser)
            
          const encodedToken = sign({ _id, email }, secretcode);
          return new Response(201, {}, { createdUser, encodedToken });

          }
       

        } catch (error) {
          return new Response(
            500,
            {},
            {
              error,
            }
          );
        }
      });


      this.post("/auth/login",(schema,request)=>{


        const { email, password } = JSON.parse(request.requestBody);
        try {
          const foundUser = schema.users.findBy({ email:email });
          if (!foundUser) {
            return new Response(
              404,
              {},
              { errors: ["The email you entered is not Registered. Not Found error"] }
            );
          }
          if (password === foundUser.password) {
            const encodedToken = sign(
              { _id: foundUser._id, email },
              secretcode
            );
            foundUser.password = undefined;
            return new Response(200, {}, { foundUser, encodedToken });
          }
          return new Response(
            401,
            {},
            {
              errors: [
                "The credentials you entered are invalid. Unauthorized access error.",
              ],
            }
          );
        } catch (error) {
          return new Response(
            500,
            {},
            {
              error,
            }
          );
        }

      })

    
    },

  });
}
