$(function () { 
	$('#tree_div').jstree({
		"core" : {
			//"animation" : 0,  //durée de l'animation en ms (def=200)
			"check_callback" : true, //permet la modification de la structure de l'arbre
			//"themes" : { "stripes" : true }, //FIXME se faire un joli thème à indiquer ici (à identifier avec son nom)
/*			'data' : {
				'url' : function (node) {
					return node.id === '#' ?
						'ajax_demo_roots.json' : 'ajax_demo_children.json';
				},
				'data' : function (node) {
					return { 'id' : node.id };
				}
			}*/
			'data' : [ //FIXME c'est juste un exemple de données en dur, il faudrait l'alimenter autrement maintenant.
				'Simple root node',
				{
					'id' : 'node_2',
					'text' : 'Root node with options',
					'state' : { 'opened' : true, 'selected' : true },
					'children' : [ { 'text' : 'Child 1' }, 'Child 2']
				}
			]
		},
		"types" : { // configuration des types de noeud (ici: root, dossier et fichier)
			"#" : {
				"max_children" : 1,
				"max_depth" : 4, //FIXME: limite un peu basse :-)
				"valid_children" : ["root"]
			},
			"root" : {
				"icon" : "/static/3.3.5/assets/images/tree_icon.png", //FIXME
				"valid_children" : ["default"]
			},
			"default" : {
				"valid_children" : ["default","file"]
			},
			"file" : {
				"icon" : "glyphicon glyphicon-file", //FIXME
				"valid_children" : []
			}
		},
		"plugins" : [
			"contextmenu", // menu avec clic droit
			"dnd", //drag'n drop
			"search",
			"state", // sauvegarde local de l'état de l'arbre pour la prochaine consultation
			"types", // permet de typer les noeuds de l'arbre et de les représenter différemment
			//"sort", //tri sur les noeud freres
			//"wholerow" // surligne toute la ligne lorsqu'un noeud est sélectionné.
		]
	});
})