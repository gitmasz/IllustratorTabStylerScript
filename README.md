# Tab Styler Script for Adobe Illustrator
This script changes tab character style in selected text frame applying to it previously created character style in Adobe Illustrator. Very useful for automation when working with tabs in Adobe Illustrator for making dotted lists or tables with different style for tab characters. More about using tabs in Adobe Illustrator you can find on [Adobe Help Webpage](https://helpx.adobe.com/illustrator/using/tabs.html). Script uses regular expresion to serch for tab character in selected text frame and aply to them character style named "Tag". Script can be easily change to automate style changefor different characters in selected text frame.

## How to install script for Adobe Illustrator
Download the script ("tab-character-styler.jsx" file) to your computer’s hard disk. Place the file in the Adobe Illustrator Scripts folder which should be located in:
For english version of CS6: C:\Program Files\Adobe\Adobe Illustrator CS6 (64 Bit)\Presets\en_GB\Scripts ("pl_PL\Skrypty" for polish version)
For english version of CC:

If you place the script in the Adobe Illustrator Scripts folder, the script will appear in the File > Scripts submenu.

If you place the script in another location on the hard disk, you can run the script in Illustrator by choosing File > Scripts > Other Script or you can use shortcut Ctrl+F12.

WARNING: script will work only if you previously create character style and name it "Tag" and only for selected text field which contains at least one tab character.

### Script usage preview
In this repository you will find an AI file called “script-test.ai” created in Adobe Illustrator CS6, with which you can quickly test how it works. Below I have provided a preview screenshot of before and after using the script for this test file.

![Illustrator Tab Styler Script - preview](https://github.com/gitmasz/IllustratorTabStylerScript/blob/master/preview.png?raw=true)
