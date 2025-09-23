import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing page</h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Button title="Button" styles="bg-blue-500 py-2 px-4 mt-4 ml-6 rounded-full hover:bg-blue-600 text-white text-lg"  />
            <Button title="Button" styles="bg-green-500 py-2 px-4 mt-4 ml-6 rounded-full hover:bg-yellow-300 text-white text-sm" />
        </div>
    );
}
export default Landing;