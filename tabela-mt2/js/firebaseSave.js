const game_database = {};

(function () {

    let game_id = false;

    function save(val){

        const game_data = {
            valores: val,
            createdat: firebase.database.ServerValue.TIMESTAMP,
        };

        if(!game_id){
            game_id = firebase.database().ref().child('games').push().key;
        }

        let updates = {};
        updates['/games/' + game_id] = game_data;

        let game_ref = firebase.database().ref();

        game_ref.update(updates).then(function(){ return { success: true, message: "Game Created" }; }).catch(function(){ return { success: false, message: "failed"}});
        
    }

    game_database.new = save;
})()