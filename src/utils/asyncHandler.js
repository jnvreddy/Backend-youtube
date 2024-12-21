const asyncHandler = (asyncHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res, next))
        .catch((err) => next(err)) 
    }
}


export {asyncHandler}

// const asyncHandler = () => {}
// consst asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try{

//     }catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }