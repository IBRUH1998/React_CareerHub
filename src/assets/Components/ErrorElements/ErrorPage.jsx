import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-4xl text-cyan-400">
            <h1 >404</h1>

            <button className="border rounded-full bg-slate-900  p-4"><Link to="/">Back</Link></button>
        </div>
    );
};

export default ErrorPage;