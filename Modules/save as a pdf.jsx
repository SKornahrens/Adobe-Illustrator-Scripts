﻿var doc = app.activeDocument;var filename = prompt("what is the File Name");var folderpath =  Folder("/Volumes/ShrData/server_docs/custom_stickers");var pdfFile = new File(folderpath + "/" + filename);saveFileToPDF(pdfFile);function saveFileToPDF(pdfFile){    var saveOpts = new PDFSaveOptions();    saveOpts.compatability = PDFCompatibility.ACROBAT6;    saveOpts.preserveEditability = true;    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;     doc.saveAs(pdfFile, saveOpts);    userInteractionLevel = originalInteractionLevel;}//    /Users/stevekornahrens/Desktop//    /Volumes/ShrData/server_docs/custom_stickers//working but needs file pathvar filename = prompt("what is the File Name");function test(){     var opts = new PDFSaveOptions();    opts.compatability = PDFCompatibility.ACROBAT6;  var folderpath =  Folder("/Volumes/ShrData/server_docs/custom_stickers/Art For Robb/AA - Jess");  var pdfFile = new File(folderpath + "/" + filename);  doc.saveAs(File(folderpath + "/" + filename), opts);  };  test(); 