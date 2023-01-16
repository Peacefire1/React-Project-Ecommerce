export default function SignIn() {
    return (
        <div>
            <form>
                <label>Name:</label><br />
                <input type="text" placeholder="Enter your name " />
                <label >Email:</label>
                <input type="text" placeholder="Enter your Email" />
                <label> Password:</label>
                <input type="password" placeholder="Create a password" />
                <p>Must be at least 8 characters</p>
                <button>Create account</button>
                <p>Already have an account? <a href="#">Log in</a></p>
            </form>
        </div>
    )
}