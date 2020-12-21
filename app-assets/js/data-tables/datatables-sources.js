
$(document).ready(function() {

/***************************************
*       HTML (DOM) sourced data        *
****************************************/

    $('.sourced-data').DataTable();

/*********************************
*       Ajax sourced data        *
**********************************/

    $('.ajax-sourced').DataTable( {
        // "ajax": "../../app-assets/data/datatables/ajax-sourced.json"
    } );


/**************************************
*       Server-side processing        *
**************************************/

    $('.server-side').DataTable( {
        "processing": true,
        "serverSide": true,
        //"ajax": "../server_side/scripts/server_processing.php" NOTE: use serverside script to fatch the data
        // "ajax": "../../app-assets/data/datatables/server-side.json"
    } );



} );