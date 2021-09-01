Moralis.Cloud.define('test', async function(request){
    const query = new Parse.Query("flips");
    query.equalTo('win', true);
    
    const pipeline = [
        {
            group: {
                objectId: null,
                total_sum: { $sum: { $toInt: "$bet" } }
            }
        }
    ]

    const result =  await query.aggregate(pipeline, {useMasterKey: true});
    return result;
})