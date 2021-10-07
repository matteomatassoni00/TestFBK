y = true;
new Waypoint({
    element: document.getElementById('table-trigger'),
    handler: function () {
        if (y) {
            y = false;
            $('#myTable').DataTable({
                ajax: "https://raw.githubusercontent.com/matteomatassoni00/TestFBK/main/data/people.json",

                "columns": [
                    { "data": "nome" },
                    { "data": "data_nascita" },
                    { "data": "luogo_nascita" },
                    { "data": "sesso" },
                    { "data": "mestiere" },
                    { "data": "mestiere_espatrio" },
                    { "data": "data" },
                    { "data": "validita" },
                    { "data": "espatri" },
                    { "data": "note" },
                    { "data": "rinnovi" },
                    { "data": "n_rinnovi" }
                ],
                paging: true,
                autoWidth: true,
                "language": {
                    "lengthMenu": "Visualizza _MENU_ elementi",
                    "zeroRecords": "La ricerca non ha portato alcun risultato.",
                    "info": "Pagina _PAGE_ di _PAGES_",
                    "infoEmpty": "Nessun risultato",
                    "infoFiltered": "(filtrati da _MAX_ elementi totali)",
                    "search": "Cerca: ",
                    "paginate": {
                        "first":      "Primo",
                        "last":       "Ultimo",
                        "next":       "Successivo",
                        "previous":   "Precedente"
                },
                }

                });
        }

    }
});


