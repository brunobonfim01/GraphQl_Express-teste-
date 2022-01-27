import { User } from "@model/User";
import { injectable } from "tsyringe";

@injecttable()
class CreateUserService {
    async execute({ name, username }: Omit<User, "createdAt">) {
        const userAlreadyExists = await User.findOne({
            username,
        });

        if (userAlreadyExists) {
            throw new Error("User already exist!");
        }

        const user = await User.create({
            name,
            username,
        });

        return user;
    }
}

export { CreateUserService };