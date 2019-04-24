// Your code here.
function countBs(string){
  	count = 0;
	for(i=0;i<string.length;i++)
      if(string[i]=="B")
        count+=1
	return count;
}
function countChar(string,char){
	count = 0;
  	for(i=0;i<string.length;i++)
      if(string[i]==char)
        count+=1
  	return count;
}
console.log(countBs("BBC"));
// ¡ú 2
console.log(countChar("kakkerlak", "k"));
// ¡ú 4