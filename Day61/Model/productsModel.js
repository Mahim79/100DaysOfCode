const {Schema,model} = require("mongoose")

const productsSchema = new Schema({
    title:{
        type:String,
        required : [true, "Title is required"],
        minlength:[5,"You should be write title minimum 5 characters"],
        maxlength:[10,"You should be write title maximum 10 characters"],
        uppercase : true,
      

    },
    price : {
        type:Number,
        required : [true, "Price is required"],
        
    },
    quantity:{
        type:String,
        default:10
    },
    size:[String],
    color:{
        type :String,
        enum : {
            values : ["White","Black","Red"],
            message : "You should use White,Black or Red"
        }
    },
    code:{
        type:String,
        match:[/^(PROD)-\d{4}$/, "Product code {VALUE} doesn't  matched.Right format is : PROD-XXXX"],
        unique:true
    }
},{
    timestamps:true
})

module.exports.products = model("Product",productsSchema)

// module.exports = products