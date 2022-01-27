import { User } from "@models/user";
import { injectable } from "tsyringe";

@injectable()
class GetUserService{
    async execute() {
        const users = await User.find();
        return users;
    }
}

export { GetUserService };