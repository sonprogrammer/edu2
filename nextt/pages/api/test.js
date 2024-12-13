export default function Handler(req, res) {
    // console.log('req',req.query)
    
    return res.status(200).json('success');
    if(req.method === "POST") {
        return res.status(200).json('success')
    }
}


