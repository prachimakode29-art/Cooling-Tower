const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Text colors
  content = content.replace(/text-\[\#F8FAFC\]/g, 'text-[#0f1c2e]');
  content = content.replace(/text-\[\#CBD5E1\]/g, 'text-slate-600');
  content = content.replace(/text-\[\#94A3B8\]/g, 'text-slate-500');
  content = content.replace(/text-\[\#64748B\]/g, 'text-slate-400');
  
  // Backgrounds
  content = content.replace(/bg-\[\#1E293B\]/g, 'bg-white');
  content = content.replace(/bg-\[\#0F172A\]/g, 'bg-slate-50');
  content = content.replace(/bg-\[\#334155\]/g, 'bg-slate-100');

  // Borders
  content = content.replace(/border-\[\#334155\]/g, 'border-slate-200');
  
  // Brand colors
  content = content.replace(/\[\#3B82F6\]/g, '[#f97316]'); 
  content = content.replace(/\[\#2563EB\]/g, '[#ea6600]'); 
  content = content.replace(/\[\#60A5FA\]/g, '[#0ea5e9]'); 

  // Font family
  content = content.replace(/font-sans/g, "font-['Syne']");

  // Re-Navy
  // Some places used bg-slate-50 which is now white, but let's leave it as white/slate-50.
  // The header/footer/hero were Navy #0f1c2e. We can fix them manually if needed, but let's check.
  
  fs.writeFileSync(file, content, 'utf8');
});
