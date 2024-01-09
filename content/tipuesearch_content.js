var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/CYG41223103/cp2023 \n 網站: https://cyg41223103.github.io/cp2023/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n", 'tags': '', 'url': 'Brython.html'}, {'title': '作業內容', 'text': '', 'tags': '', 'url': '作業內容.html'}, {'title': 'W3', 'text': '利用已經帶有 Brython 執行環境的倉儲, 在設定學員 Github Classroom 首次作業時, 即經由 template 置入, 因此學員只要: \n 利用學校 email 帳號, 建立 Github 帳號, 以英文姓名縮寫加上一組數字, 選擇最短帳號名稱 例如: jfk40723199, jfk 為其自選的姓名縮寫, 而隨後則加上各自的學號. \n 擁有 Github 帳號後, 即可透過 Github Classroom assignment 連結取得作業倉儲, 自行在倉儲中設定 Github Pages 後, 即可啟用作業網站 (以下 \xa0 所謂 網站均指靜態網站 \xa0 , 而用來編輯網站內容的 動態網站, 則統稱為網際內容編輯器 , 使用動態網站的目的在編輯靜態網站的內容). 網站內容經過編輯之後, 必須建立新的網站內容 (使用 generate_pages), 然後將新的網站內容更新到對應的 Github 倉儲中 (稱為改版, 其過程經歷 git add, git commit 與 git push 等階段). \n git 為分散式版次管理系統工具. \n git add \n git commit \n git push \n 採用 Github Classroom 建立作業倉儲的問題: \n 2023/09/26 在 1a w3 課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '各學員自行建立線上考試帳號 \n 依據 \xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n 登入 Github 後, 以\xa0 https://github.com/mdecycu/cmsite \xa0作為 Template 建立 cp2023 倉儲 \n 在 Replit IDE 上啟動 cp2023 內容編輯網站, 並將改版內容推送至 Github \n 在同時登入 Github 與 Replit 的情況下, 將 Replit 帳號 connect 至 Github 帳號 \n 利用 import 將 cp2023 倉儲導入 Replit \n 設定 .replit 為 python3 main.py \n 根據 cp2023 倉儲中的 README.md 在 Shell 區執行 git submodule 與 pip install \n 以 Run 執行 main.py 啟動倉儲內容編輯網頁 \n 利用 密碼產生程式 將所選定的管理者密碼字串存入 Tool - Secrets 頁面中的 config 變數 (若無 config 環境變數設定, 動態網站登入管理者密碼將交由倉儲中的 config/config 字串進行驗證) \n 重新啟倉儲內容編輯網頁後, 以新管理者密碼登入後改版並 Convert 為靜態內容後, 在 Git 頁面中將改版內容推至 Github \n', 'tags': '', 'url': 'W4.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': '台灣國旗', 'text': '\n // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n', 'tags': '', 'url': '台灣國旗.html'}, {'title': '日本國旗', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n', 'tags': '', 'url': '日本國旗.html'}, {'title': '美國國旗', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 178, 34, 52); // Red stripes\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 60, 59, 110); // Blue field\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // Corrected star size (half the original size)\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.126 * height); // Horizontal spacing between stars\n    int star_spacing_y = (int)(0.054 * height); // Vertical spacing between stars\n    int star_start_x = (int)(0.122 * height); // Starting X position for stars\n    int star_start_y = (int)(0.0485 * height); // Starting Y position for stars\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n        int space_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x+space_x;\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10+M_PI;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // Fill the star with white color\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': '美國國旗.html'}, {'title': 'W7', 'text': 'Map: site map 網站所有頁面 \n EditA: edit all pages, 使用時機為(1)解決多人共用網站時的衝突, 或(2)刪除特定頁面 \n Edit: edit one page, 先選頁面, 再選 Edit 然後才能進入編輯模式 \n Config: 編輯網站標題, 若要編輯 site title, 必須更改 init.py 中的 site_title 字串內容 \n Search: 頁面資料 html 原始碼內容搜尋 \n IUpload: image upload, 影像檔案上傳, 資料會放入 images 目錄中 \n IList: image file list, 列出存在 images 目錄下的影像檔案 \n FUpload: file upload, 一般檔案上傳功能, 資料會放入 downloads 目錄中 \n FList: file list, 列出位於 downloads 目錄下的檔案 \n Logout: 登出 \n Convert: 將 config/content.htm 經過分頁程式處理後, 轉為 content 目錄下的超文件 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '線上簡報、網誌與多媒體影片製作工具: \n Leo Editor \xa0 ( 討論群組 ) 為大綱管理系統, 可以當作程式開發的 IDE (Integrated Development Environment) 使用, 可用來編輯 reveal.js 簡報檔案中的 html 與 markdown, 也可用來編輯 Pelican 網誌 markdown 與轉檔, 並且在電腦輔助設計與分析過程中, 可以用來解讀 CoppeliaSim XML 格式檔案. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n Wink \xa0 為操作流程影片製作套件, 可以在電腦操作過程, 儲存關鍵頁面與滑鼠點擊區域後, 加上輔助文字說明後製作成 mp4 影片檔. \n ShareX \xa0 為螢幕畫面取像或錄影套件, 可以擷取電腦畫面任一區域存為影像檔, 或者結合語音說明與滑鼠操作錄製說明影片. \n OBS \xa0 為電腦廣播製作系統, 可以結合各種語音、圖像與影片製作出多元的電腦操作說明影片. \n Wink 與 ShareX 都需要 \xa0 ffmpeq.exe . \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W13', 'text': '在這學期的計算機概論中，我學習到了許多平時不太會接觸到的技能。比如，在GitHub上建立網路倉儲，以及在Replit網站平台上使用C++進行繪圖。整體而言，這些技能讓我覺得挺有趣的。 \n 然而，在遇到一些問題時，真的讓人感到十分無奈。即使有GPT這樣的工具，有時候也無法完全解決我遇到的問題(應該是理解上的問題啦)。還有學校的網路問題真的体讓人困擾的。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'ANSIC', 'text': '', 'tags': '', 'url': 'ANSIC.html'}, {'title': '1.-1', 'text': '編寫一個 C 程式來列印您的姓名、出生日期和手機號碼。 \n #include <stdio.h>\n\nint main()  \n{\n    // Print Name\n    printf("Name   : Chiu\\n"); \n\n    // Print Date of Birth\n    printf("DOB    : September 14, 2004\\n"); \n\n    // Print Mobile Number\n    printf("Mobile : 0900-000-000\\n"); \n\n    // Indicate successful execution\n    return(0); \n} \n  editor2 結束  \n \n', 'tags': '', 'url': '1.-1.html'}, {'title': '2.-1', 'text': '檢查給定的數字是否為醜數 \n # include <stdio.h>\n# include <string.h>\n\nint main()\n{\nint n,x=0;\n  printf("\\n\\n Check whether a given number is an ugly number:\\n");\n  printf("----------------------------------------------------\\n");\n  printf("Input an integer number: ");\n  scanf("%d",&n);\n\n      if (n <= 0) {  \n            printf("Input a correct number.");  \n        }\n       while (n != 1) \n       {  \n            if (n % 5 == 0) \n            {  \n                n /= 5;  \n            } \n            else if (n % 3 == 0) \n            {  \n                n /= 3;  \n            } \n            else if (n % 2 == 0) \n            {  \n                n /= 2;  \n            } \n            else\n            {  \n                printf("It is not an ugly number.\\n"); \n                x = 1;  \n                break;  \n            }  \n        } \n                if (x==0)\n                { \n                printf("It is an ugly number.\\n");\n                }\n} \n \n', 'tags': '', 'url': '2.-1.html'}, {'title': '3.-1', 'text': '反轉給定整數的數字 \n #include <stdio.h>\nint reverse(int n) {\n    int d, y = 0;\n    while (n) {\n        d = n % 10;\n        if ((n > 0 && y > (0x7fffffff - d) / 10) ||\n            (n < 0 && y < ((signed)0x80000000 - d) / 10)) {\n            return 0;  \n        }\n        y = y * 10 + d;\n        n = n / 10;\n    }\n    return y;  \n}\n\nint main(void)\n{\n    int i = 123;\n    printf("Original integer: %d  ",i);\n    printf("\\nReverse integer: %d  ",reverse(i));\n    i = 208478933;\n    printf("\\nOriginal integer: %d  ",i);\n    printf("\\nReverse integer: %d  ",reverse(i));\n    i = -73634;\n    printf("\\nOriginal integer: %d  ",i);\n    printf("\\nReverse integer: %d  ",reverse(i));\n    return 0;\n}\n \n \n', 'tags': '', 'url': '3.-1.html'}, {'title': '4.-1', 'text': '使用哈希 (#) 列印一個區塊 F，其中 F 的高度為 6 個字符，寬度為 5 個和 4 個字符。 並且還列印一個非常大的“C”。 \n #include <stdio.h>\n\nint main() \n{\n    // Print top line of pattern\n    printf("    ######\\n");\n\n    // Print second line of pattern\n    printf("  ##      ##\\n");\n\n    // Print lines 3 to 7 of pattern\n    printf(" #\\n");\n    printf(" #\\n");\n    printf(" #\\n");\n    printf(" #\\n");\n    printf(" #\\n");\n\n    // Print bottom line of pattern\n    printf("  ##      ##\\n");\n\n    // Print last line of pattern\n    printf("    ######\\n");\n\n    return(0);\n} \n \n', 'tags': '', 'url': '4.-1.html'}, {'title': '5.-1', 'text': '從隨機數組和排序數組構造最大堆 \n   #include <stdio.h>          // 包含 printf 函數的標準輸入/輸出庫\n  #include <stdlib.h>         // 包含動態記憶體分配的標準庫\n\n  #define MAX_HEAP_SIZE 100   // 定義堆的最大大小\n\n  // 交換堆中兩個元素的函數\n  void swap(int *a, int *b) {\n      int temp = *a;\n      *a = *b;\n      *b = temp;\n  }\n\n  // 插入元素後維護最大堆屬性的函數\n  void heapifyDown(int arr[], int size, int index) {\n      int leftChild = 2 * index + 1;   // 計算左子索引\n      int rightChild = 2 * index + 2;  // 計算右子索引\n      int largest = index;              // 假設當前節點是最大的\n\n      // 求當前節點、左子節點、右子節點中最大的元素\n      if (leftChild < size && arr[leftChild] > arr[largest]) {\n          largest = leftChild;\n      }\n\n      if (rightChild < size && arr[rightChild] > arr[largest]) {\n          largest = rightChild;\n      }\n\n      // 如果最大的元素不是當前節點，則與最大的子節點交換並繼續向下堆\n      if (largest != index) {\n          swap(&arr[index], &arr[largest]);\n          heapifyDown(arr, size, largest);\n      }\n  }\n\n  // 從數組建立最大堆的函數\n  void buildMaxHeap(int arr[], int size) {\n      // 從最後一個非葉節點開始，向下堆化到根\n      for (int i = size / 2 - 1; i >= 0; i--) {\n          heapifyDown(arr, size, i);\n      }\n  }\n\n  // 顯示數組元素的函數\n  void display(int arr[], int size) {\n      printf("Array elements: ");\n      for (int i = 0; i < size; i++) {\n          printf("%d ", arr[i]);  // 列印數組中的每個元素\n      }\n      printf("\\n");\n  }\n\n  int main() {\n      // 使用隨機數組進行測試\n      int randomArray[] = {6, 8, 12, 7, 1};               // 聲明一個隨機數組\n      int randomSize = sizeof(randomArray) / sizeof(randomArray[0]);  // 計算數組的大小\n\n      printf("Original Random Array:\\n");\n      display(randomArray, randomSize);  // 顯示原始隨機數組\n\n      // 從隨機數組建立最大堆\n      buildMaxHeap(randomArray, randomSize);\n\n      printf("Max Heap from Random Array:\\n");\n      display(randomArray, randomSize);  // 顯示隨機數組中的最大堆\n\n      // 使用排序數組進行測試\n      int sortedArray[] = {19, 12, 8, 6, 2};              // 聲明一個排序數組\n      int sortedSize = sizeof(sortedArray) / sizeof(sortedArray[0]);  // 計算數組的大小\n\n      printf("\\nOriginal Sorted Array:\\n");\n      display(sortedArray, sortedSize);  // 顯示原始排序數組\n\n      // 從排序數組建立最大堆\n      buildMaxHeap(sortedArray, sortedSize);\n\n      printf("Max Heap from Sorted Array:\\n");\n      display(sortedArray, sortedSize);  // 顯示排序數組中的最大堆\n\n      return 0;                         // 返回0表示執行成功\n  } \n \n', 'tags': '', 'url': '5.-1.html'}, {'title': '6.-1', 'text': '從隨機數組和排序數組構造最小堆 \n #include <stdio.h>\n\n// 用於堆化以節點 i 為根的子樹的函數，該節點是 arr[] 中的索引\nvoid minHeapify(int arr[], int n, int i) {\n    int smallest = i;  // 將最小的初始化為 root\n    int left = 2 * i + 1;  // 左子節點\n    int right = 2 * i + 2; // 右子節點\n\n    // 如果左子節點小於根\n    if (left < n && arr[left] < arr[smallest])\n        smallest = left;\n\n    // 如果右子節點小於目前為止最小的子節點\n    if (right < n && arr[right] < arr[smallest])\n        smallest = right;\n\n    // 如果最小的不是根\n    if (smallest != i) {\n        // 將找到的最小元素與根交換\n        int temp = arr[i];\n        arr[i] = arr[smallest];\n        arr[smallest] = temp;\n\n        // 遞歸地堆化受影響的子樹\n        minHeapify(arr, n, smallest);\n    }\n}\n\n// 從數組建立最小堆的函數\nvoid buildMinHeap(int arr[], int n) {\n    // 從最後一個非葉子節點開始，以相反的順序堆疊所有節點\n    for (int i = n / 2 - 1; i >= 0; i--)\n        minHeapify(arr, n, i);\n}\n\n// 列印數組的函數\nvoid printArray(int arr[], int n) {\n    for (int i = 0; i < n; ++i)\n        printf("%d ", arr[i]);\n    printf("\\n");\n}\n\n// 測試堆構造函數\nint main() {\n    // 使用隨機數組進行測試\n    int randomArray[] = {4, 10, 3, 5, 1};\n    int n1 = sizeof(randomArray) / sizeof(randomArray[0]);\n\n    printf("Original Random Array: ");\n    printArray(randomArray, n1);\n\n    // 建構堆\n    buildMinHeap(randomArray, n1);\n\n    printf("Min Heap from Random Array: ");\n    printArray(randomArray, n1);\n\n    printf("\\n");\n\n    // 使用排序數組進行測試\n    int sortedArray[] = {8, 7, 5, 4, 2};\n    int n2 = sizeof(sortedArray) / sizeof(sortedArray[0]);\n\n    printf("Original Sorted Array: ");\n    printArray(sortedArray, n2);\n\n    // 建構堆\n    buildMinHeap(sortedArray, n2);\n\n    printf("Min Heap from Sorted Array: ");\n    printArray(sortedArray, n2);\n\n    return 0;\n} \n \n', 'tags': '', 'url': '6.-1.html'}, {'title': '7.-1', 'text': '鏡像的二元樹鏡像 \n // 包括必要的頭文件\n#include <stdio.h>\n#include <stdlib.h>\n \n// 二元樹節點的結構\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n \n// 建立新節點的函數\nstruct TreeNode* createNode(int value) {\n    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    if (newNode != NULL) {\n        newNode->data = value;\n        newNode->left = NULL;\n        newNode->right = NULL;\n    }\n    return newNode;\n}\n \n// 向二元樹插入節點的函數\nstruct TreeNode* insertNode(struct TreeNode* root, int value) {\n    if (root == NULL) {\n        return createNode(value);\n    }\n \n    if (value < root->data) {\n        root->left = insertNode(root->left, value);\n    } else if (value > root->data) {\n        root->right = insertNode(root->right, value);\n    }\n \n    return root;\n}\n \n// 執行有序遍歷和列印元素的函數\nvoid inOrderTraversal(struct TreeNode* root) {\n    if (root != NULL) {\n        inOrderTraversal(root->left);\n        printf("%d ", root->data);\n        inOrderTraversal(root->right);\n    }\n}\n \n// 建立二元樹鏡像的函數\nstruct TreeNode* mirrorTree(struct TreeNode* root) {\n    if (root == NULL) {\n        return NULL;\n    }\n \n    // 交換左右子樹\n    struct TreeNode* temp = root->left;\n    root->left = mirrorTree(root->right);\n    root->right = mirrorTree(temp);\n \n    return root;\n}\n \n// 釋放為二元樹分配的記憶體的函數\nvoid freeTree(struct TreeNode* root) {\n    if (root != NULL) {\n        freeTree(root->left);\n        freeTree(root->right);\n        free(root);\n    }\n}\n \nint main() {\n    struct TreeNode* root = NULL;\n    int nodeValue;\n    char choice;\n \n    // 將節點插入二元樹\n    do {\n        printf("Input a value to insert into the binary tree (enter 0 to stop): ");\n        scanf("%d", &nodeValue);\n \n        if (nodeValue != 0) {\n            root = insertNode(root, nodeValue);\n        }\n \n    } while (nodeValue != 0);\n \n    //列印原始二元樹\n    printf("\\nOriginal Binary Tree (In-order Traversal): ");\n    inOrderTraversal(root);\n    printf("\\n");\n \n    // 建立並列印二元樹的鏡像\n    struct TreeNode* mirroredRoot = mirrorTree(root);\n    printf("\\nMirrored Binary Tree (In-order Traversal): ");\n    inOrderTraversal(mirroredRoot);\n    printf("\\n");\n \n    // 釋放分配的記憶體\n    freeTree(root);\n    freeTree(mirroredRoot);\n \n    return 0;\n} \n \n', 'tags': '', 'url': '7.-1.html'}, {'title': '8.-1', 'text': '找出兩個數字之間的最大數字 \n #include <stdio.h>\n#include <stdlib.h>\n \nint main() {\n    int fno, sno, *ptr1 = &fno, *ptr2 = &sno;\n \n    printf("\\n\\n Pointer : Find the maximum number between two numbers :\\n");\n    printf("------------------------------------------------------------\\n");\n \n    printf(" Input the first number : ");\n    scanf("%d", ptr1); // 讀取使用者的第一個數字並使用 ptr1 儲存它\n    printf(" Input the second number : ");\n    scanf("%d", ptr2); // 從用戶那裡讀取第二個數字並使用 ptr2 儲存它\n \n    // 比較ptr1和ptr2指向的值，找出最大數\n    if (*ptr1 > *ptr2) {\n        printf("\\n\\n %d is the maximum number.\\n\\n", *ptr1); // 列印最大數量\n    } else {\n        printf("\\n\\n %d is the maximum number.\\n\\n", *ptr2); //列印最大數量\n    }\n    return 0;\n} \n \n', 'tags': '', 'url': '8.-1.html'}, {'title': '9.-1', 'text': '寫一個C 程式來顯示多個變數。 \n #include <stdio.h>\n\nint main()\n{\n    int a = 125, b = 12345;        /* Declare and initialize integer variables */\n    long ax = 1234567890;          /* Declare and initialize long integer variable */\n    short s = 4043;                /* Declare and initialize short integer variable */\n    float x = 2.13459;             /* Declare and initialize floating-point variable */\n    double dx = 1.1415927;         /* Declare and initialize double precision variable */\n    char c = \'W\';                  /* Declare and initialize character variable */\n    unsigned long ux = 2541567890; /* Declare and initialize unsigned long integer variable */\n\n    /* Various arithmetic operations and type conversions */\n    printf("a + c =  %d\\n", a + c);\n    printf("x + c = %f\\n", x + c);\n    printf("dx + x = %f\\n", dx + x);\n    printf("((int) dx) + ax =  %ld\\n", ((int) dx) + ax);\n    printf("a + x = %f\\n", a + x);\n    printf("s + b =  %d\\n", s + b);\n    printf("ax + b = %ld\\n", ax + b);\n    printf("s + c =  %hd\\n", s + c);\n    printf("ax + c = %ld\\n", ax + c);\n    printf("ax + ux = %lu\\n", ax + ux);\n\n    return 0;\n} \n \n', 'tags': '', 'url': '9.-1.html'}, {'title': '10.-1', 'text': '寫一個 C 程序，接受使用者提供的兩個整數併計算這兩個整數的和。 \n #include <stdio.h>\n\nint main() {\n    int x, y;\n    int result1, result2; // 用于存储 scanf 的返回值\n\n    // 获取第一个整数\n    printf("Input the first integer: ");\n    result1 = scanf("%d", &x);\n    if (result1 != 1) {\n        printf("Error: Please enter an integer.\\n");\n        return 1;\n    }\n\n    // 获取第二个整数\n    printf("Input the second integer: ");\n    result2 = scanf("%d", &y);\n    if (result2 != 1) {\n        printf("Error: Please enter an integer.\\n");\n        return 1;\n    }\n\n    // 计算并输出它们的和\n    printf("Sum of the two integers = %d\\n", x + y);\n\n    return 0;\n} \n \n', 'tags': '', 'url': '10.-1.html'}, {'title': 'C_EX', 'text': '', 'tags': '', 'url': 'C_EX.html'}, {'title': '1.-2', 'text': '#include <stdio.h>\nint main()\n{\n/* 印出 Hello World! Bye Bye */\nprintf("Hello World! ");\nprintf("Bye ");\nprintf("Bye");\nreturn 0;\n} \n \n', 'tags': '', 'url': '1.-2.html'}, {'title': '2.-2', 'text': '#include <stdio.h>\n/* read and display a number */\nint main () {\n char c;\n printf("Enter character: ");\n c = getchar(); /* read the character in */\n printf("Character entered: ");\n putchar(c); /* write the character */\n return(0);\n} \n \n', 'tags': '', 'url': '2.-2.html'}, {'title': '3.-2', 'text': '#include <stdio.h>\nvoid main()\n{\nprintf("%d\\n", 1 && 3 );\nprintf("%d\\n", 0 && 0 );\nprintf("%d\\n", 2 && 2 );\n} \n \n', 'tags': '', 'url': '3.-2.html'}, {'title': '4.-2', 'text': '#include<stdio.h>\nvoid main()\n{\nint a,b;\na = 15;\nb = 1;\nprintf("%d \\n", a | b ); /* a OR b */\nprintf("%d \\n", a & b ); /* a AND b */\nprintf("%d \\n", a ^ b ); /* a XOR b */\nprintf("%d \\n", a << 1 ); /* a 位元左移 1 位 */\nprintf("%d \\n", a >> 1 ); /* a 位元右移一位 */\nprintf("%d \\n", ~a ); /* A 的補數運算 */\n} \n \n', 'tags': '', 'url': '4.-2.html'}, {'title': '5.-2', 'text': '#include<stdio.h>\nint main()\n{\nint a,b;\na = 10; b = 3;\nprintf( "%d \\n", a * b );\nprintf( "%d \\n", a / b );\nprintf( "%d \\n", a + b );\nprintf( "%d \\n", a - b );\nprintf( "%d \\n", a % b );\nreturn 0;\n} \n \n', 'tags': '', 'url': '5.-2.html'}, {'title': '6.-2', 'text': '#include <stdio.h>\nint main()\n{\nint a = 1;\nint A = 8;\nint b = 2, c;\nc = A - a + b;\n/* 輸出 a, A, b, c 到螢幕 */\nprintf( "a = %d, A = %d, b = %d, c = %d ", a, A, b, c );\nreturn 0;\n} \n \n', 'tags': '', 'url': '6.-2.html'}, {'title': '7.-2', 'text': '#include <stdio.h>\nint main()\n{\nchar x, y;\nx = \'a\';\ny = (char)97;\n/* 輸出 x, y, x, 最後一個是以 ASCII 值顯示 y */\nprintf( " x = %c, y = %c, ASCII of y = %d", x, y, y );\nreturn 0;\n} \n \n', 'tags': '', 'url': '7.-2.html'}, {'title': '8.-2', 'text': '#include <stdio.h>\nint main()\n{\nint a = 10, b = 5;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nprintf( "\\n" );\nb = 10;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nreturn 0;\n} \n \n', 'tags': '', 'url': '8.-2.html'}, {'title': '9.-2', 'text': '#include <stdio.h>\nvoid main()\n{\nint a;\na = 9;\nprintf("%d\\n", !a );\na = 0;\nprintf("%d\\n", !a );\n} \n \n', 'tags': '', 'url': '9.-2.html'}, {'title': '10.-2', 'text': '#include <stdio.h>\nfloat circle( int r ); /* 宣告 circle 的 prototype */\nvoid main()\n{\nfloat answer;\nanswer = circle(8);\nprintf( " 圓周長度是 %f", answer );\n}\n/* ====================\n circle 函數, 計算 circle 的圓周長\n==================== */\nfloat circle( int r )\n{\nfloat result;\nresult = 3.14159 * (double)2 * r;\nreturn ( result );\n} \n \n \n \n', 'tags': '', 'url': '10.-2.html'}]};