function crearCarpetas() {
  //VARIABLES QUE SI O SI S'HAN DE MODIFICAR
  var id_carpeta = 'id_carpeta_origen';
  var id_excel = 'id_google calcs con lista nombres';
  var nom_pestanya_excel = "nombre pestaña detro google calcs";
  var templateDocId = 'id_documento_a_copiar'; //documento a copiar

  
  //excel on tinc el llistat canviar el id
  var libro  = SpreadsheetApp.openById(id_excel);
  //carpeta on vull que es crein les carpetes, canviar el id
  var Carpeta = DriveApp.getFolderById(id_carpeta)
                                        
  //nom de la fulla de google sheet, pot anomenar-se diferente
  var hoja = libro.getSheetByName(nom_pestanya_excel);
  
  //numero de files informades resto 1 per la capçalera
  var numFilas = hoja.getLastRow()-1;
  var nom = hoja.getRange(2,1,numFilas).getValues();
  var cognom = hoja.getRange(2,2,numFilas).getValues();

  for(var i=0;i<numFilas;i++)
  {
    var nomCarpeta = cognom[i]+", "+nom[i];
    var carpetaActual = Carpeta.createFolder(nomCarpeta);
    Logger.log("carpeta creada " + nomCarpeta);
    //carpetaActual no em serveix, pero podria fer subcarpetes si hem fa falta.
  }
  //creo un document de menor d'edat per tots
  createDocsInSubfolders(id_carpeta, templateDocId, "menor_edat")

}

/**
 *  carpeta_id es la carpeta on hi ha les subcarpetes
 *  templateDocId és el document que vols copiar
 *  sufix , es el text que es ficarà al document després dels noms i cognom
 */
function createDocsInSubfolders(carpeta_id, templateDocId, sufix) {
  //Logger.log(carpeta_id);
  // Reemplaza por el ID de la carpeta raíz que contiene los subdirectorios
  var folderId = carpeta_id;
  // Reemplaza por el ID del documento que deseas copiar
  var templateDocId = '16AGqsjTJcp2trbefzB6k0IkPtw7pw-Hs';
 
  var rootFolder = DriveApp.getFolderById(folderId);
 
  // Obtiene todas las carpetas dentro de la carpeta raíz
  var subfolders = rootFolder.getFolders();
 
  // Itera sobre todas las subcarpetas
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    var folderName = subfolder.getName().trim(); //trec espais
   
    // Copia el documento existente
    var copiedDoc = DriveApp.getFileById(templateDocId).makeCopy(folderName+"-"+sufix);
   
    // Mueve la copia al subdirectorio correspondiente (ya se crea en la subcarpeta)
    subfolder.addFile(copiedDoc);
   
    // Opcional: Elimina el archivo de la carpeta raíz, si es necesario
    //rootFolder.removeFile(copiedDoc);
   
    Logger.log('Documento copiado: ' + folderName + ' en ' + subfolder.getName());
  }
}
