import chefImage from "../assets/chef-claude-icon.png"

const Header = () => {
    return (
        <div className="flex items-center justify-center gap-3 bg-white shadow-sm p-4">
            <img src={chefImage} alt="Chef Claude" className="w-8 h-full"/>
            <h1 className="text-2xl font-medium">Chef Claude</h1>
        </div>
    )
}

export default Header