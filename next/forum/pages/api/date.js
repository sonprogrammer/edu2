export default function handler(req, res){
    let a = new Date();
    res.status(200).json(a)
}