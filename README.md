---
# Adding Angular Translation 
---
 ## Adding translate tag to html text
 ### add <translate> </translate> tag or translate attribute 
	 * <p translate>This is True</p>
	    			OR 
	 * <translate>This is True</translate> 

---
 ## To translate _Placeholders_ text
 ### add translate filter placeholders
	 * <input type="text" placeholder="{{'This is True' | translate}}">
 ### adding multiple filters for placeholders
	 * <input type="text" placeholder="{{text |translate}} {{'(specify)'| translate}}">

---
 ## To translate JS text
 ### use _gettextCatalog.getString()_  function to translate javascript strings
 	* alert(gettextCatalog.getString('This is True'));
---
## To translate text inside ng-bind
### use translate filter 
	* <strong data-ng-bind="text | translate"></strong>
---
# Extracting text 
	* run 'sudo grunt extract' 

	* that command  will create a file called template.pot in a folder  called "po"

	* then you need to convert this .pot file into .po file ,so use a editor called Poedit 
	here select new translation  choose template.pot file and then choose the language you wanna translate  then  choose  file -->  SaveAs "nameoflanguage.po" 

	* navigate to google Translator Toolkit site  then uplode saved .po file  select the language  you want to translate  and then choose next   --> no thanks

	* you will see the table which contains NAME  	WORDS LANGUAGE LAST MODIFIED  STATUSselect the row that your filename has , in a new window the translated text appears verify it then click on  complete button then you need to download translated file this is done by choosing file --> download  download it in to po folder 

	*  run 'sudo grunt compile'  if its done successfully  navigate to /translations/translations.js you will see all translated texts verify if everything is correct and also you can see that language code i.e 1st argument in  gettextCatalog.setStrings example: hi,kn,en,es....

---