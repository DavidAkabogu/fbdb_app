import { Link } from "react-router-dom";

export default function LoginPage () {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mt-32">
                <h1 className="text-4xl text-center mb-4">Login to your account</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="">
                        Don&apos;t have an acconut yet ?
                        <Link to={'/register'} >Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
