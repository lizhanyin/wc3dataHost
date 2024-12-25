echo off
:: color 9
echo Build WASM

:: 创建输出目录
if not exist out (
    mkdir out
)
set out=%cd%\out
echo %out%

:: 加载 Emscripten 环境
call emsdk_env.bat

:: 设置编译选项
set "EMCC_FLAGS=-O0 -DNO_SYSTEM -DZ_SOLO -I. -g -c"
set "LINKABLE=-s LINKABLE=1"

:: 编译源文件
:: EMCC_FLAGS="-s ERROR_ON_UNDEFINED_SYMBOLS=0"
call:emcc_make utils/checksum.cpp -o out/checksum --std=c++17 %EMCC_FLAGS%
call:emcc_make utils/path.cpp -o out/path --std=c++17 %EMCC_FLAGS%
call:emcc_make utils/strlib.cpp -o out/strlib --std=c++17 %EMCC_FLAGS%
call:emcc_make hash.cpp -o out/hash --std=c++17 %EMCC_FLAGS%
call:emcc_make utils/file.cpp -o out/file --std=c++17 %EMCC_FLAGS% %LINKABLE%
call:emcc_make datafile/objectdata.cpp -o out/objectdata --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/game.cpp -o out/game --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/id.cpp -o out/id --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/metadata.cpp -o out/metadata --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/slk.cpp -o out/slk --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/unitdata.cpp -o out/unitdata --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/westrings.cpp -o out/westrings --std=c++17 %EMCC_FLAGS%
call:emcc_make datafile/wtsdata.cpp -o out/wtsdata --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/adpcm/adpcm.cpp -o out/adpcm --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/archive.cpp -o out/archive --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/common.cpp -o out/common --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/compress.cpp -o out/compress --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/huffman/huff.cpp -o out/huff --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/locale.cpp -o out/locale --std=c++17 %EMCC_FLAGS%
call:emcc_make rmpq/pklib/crc32.c -o out/crc32 %EMCC_FLAGS%
call:emcc_make rmpq/pklib/explode.c -o out/explode %EMCC_FLAGS%
call:emcc_make rmpq/pklib/implode.c -o out/implode %EMCC_FLAGS%
call:emcc_make utils/json.cpp -o out/json --std=c++17 %EMCC_FLAGS%
call:emcc_make utils/utf8.cpp -o out/utf8 --std=c++17 %EMCC_FLAGS%
call:emcc_make parse.cpp -o out/parse --std=c++17 %EMCC_FLAGS%
call:emcc_make search.cpp -o out/search --std=c++17 %EMCC_FLAGS%
call:emcc_make image/image.cpp -o out/image --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imageblp.cpp -o out/imageblp --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imageblp2.cpp -o out/imageblp2 --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imagedds.cpp -o out/imagedds --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imagegif.cpp -o out/imagegif --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imagejpg.cpp -o out/imagejpg --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imagepng.cpp -o out/imagepng --std=c++17 %EMCC_FLAGS%
call:emcc_make image/imagetga.cpp -o out/imagetga --std=c++17 %EMCC_FLAGS%
call:emcc_make jpeg/source/jcapimin.c -o out/jcapimin %EMCC_FLAGS%
call:emcc_make jpeg/source/jcapistd.c -o out/jcapistd %EMCC_FLAGS%
call:emcc_make jpeg/source/jccoefct.c -o out/jccoefct %EMCC_FLAGS%
call:emcc_make jpeg/source/jccolor.c -o out/jccolor %EMCC_FLAGS%
call:emcc_make jpeg/source/jcdctmgr.c -o out/jcdctmgr %EMCC_FLAGS%
call:emcc_make jpeg/source/jchuff.c -o out/jchuff %EMCC_FLAGS%
call:emcc_make jpeg/source/jcinit.c -o out/jcinit %EMCC_FLAGS%
call:emcc_make jpeg/source/jcmainct.c -o out/jcmainct %EMCC_FLAGS%
call:emcc_make jpeg/source/jcmarker.c -o out/jcmarker %EMCC_FLAGS%
call:emcc_make jpeg/source/jcmaster.c -o out/jcmaster %EMCC_FLAGS%
call:emcc_make jpeg/source/jcomapi.c -o out/jcomapi %EMCC_FLAGS%
call:emcc_make jpeg/source/jcparam.c -o out/jcparam %EMCC_FLAGS%
call:emcc_make jpeg/source/jcphuff.c -o out/jcphuff %EMCC_FLAGS%
call:emcc_make jpeg/source/jcprepct.c -o out/jcprepct %EMCC_FLAGS%
call:emcc_make jpeg/source/jcsample.c -o out/jcsample %EMCC_FLAGS%
call:emcc_make jpeg/source/jctrans.c -o out/jctrans %EMCC_FLAGS%
call:emcc_make jpeg/source/jdapimin.c -o out/jdapimin %EMCC_FLAGS%
call:emcc_make jpeg/source/jdapistd.c -o out/jdapistd %EMCC_FLAGS%
call:emcc_make jpeg/source/jdatadst.c -o out/jdatadst %EMCC_FLAGS%
call:emcc_make jpeg/source/jdatasrc.c -o out/jdatasrc %EMCC_FLAGS%
call:emcc_make jpeg/source/jdcoefct.c -o out/jdcoefct %EMCC_FLAGS%
call:emcc_make jpeg/source/jdcolor.c -o out/jdcolor %EMCC_FLAGS%
call:emcc_make jpeg/source/jddctmgr.c -o out/jddctmgr %EMCC_FLAGS%
call:emcc_make jpeg/source/jdhuff.c -o out/jdhuff %EMCC_FLAGS%
call:emcc_make jpeg/source/jdinput.c -o out/jdinput %EMCC_FLAGS%
call:emcc_make jpeg/source/jdmainct.c -o out/jdmainct %EMCC_FLAGS%
call:emcc_make jpeg/source/jdmarker.c -o out/jdmarker %EMCC_FLAGS%
call:emcc_make jpeg/source/jdmaster.c -o out/jdmaster %EMCC_FLAGS%
call:emcc_make jpeg/source/jdmerge.c -o out/jdmerge %EMCC_FLAGS%
call:emcc_make jpeg/source/jdphuff.c -o out/jdphuff %EMCC_FLAGS%
call:emcc_make jpeg/source/jdpostct.c -o out/jdpostct %EMCC_FLAGS%
call:emcc_make jpeg/source/jdsample.c -o out/jdsample %EMCC_FLAGS%
call:emcc_make jpeg/source/jdtrans.c -o out/jdtrans %EMCC_FLAGS%
call:emcc_make jpeg/source/jerror.c -o out/jerror %EMCC_FLAGS%
call:emcc_make jpeg/source/jfdctflt.c -o out/jfdctflt %EMCC_FLAGS%
call:emcc_make jpeg/source/jfdctfst.c -o out/jfdctfst %EMCC_FLAGS%
call:emcc_make jpeg/source/jfdctint.c -o out/jfdctint %EMCC_FLAGS%
call:emcc_make jpeg/source/jidctflt.c -o out/jidctflt %EMCC_FLAGS%
call:emcc_make jpeg/source/jidctfst.c -o out/jidctfst %EMCC_FLAGS%
call:emcc_make jpeg/source/jidctint.c -o out/jidctint %EMCC_FLAGS%
call:emcc_make jpeg/source/jidctred.c -o out/jidctred %EMCC_FLAGS%
call:emcc_make jpeg/source/jmemmgr.c -o out/jmemmgr %EMCC_FLAGS%
call:emcc_make jpeg/source/jmemnobs.c -o out/jmemnobs %EMCC_FLAGS%
call:emcc_make jpeg/source/jquant1.c -o out/jquant1 %EMCC_FLAGS%
call:emcc_make jpeg/source/jquant2.c -o out/jquant2 %EMCC_FLAGS%
call:emcc_make jpeg/source/jutils.c -o out/jutils %EMCC_FLAGS%
call:emcc_make jass.cpp -o out/jass --std=c++17 %EMCC_FLAGS%
call:emcc_make detect.cpp -o out/detect --std=c++17 %EMCC_FLAGS%
call:emcc_make zlib/source/adler32.c -o out/adler32 %EMCC_FLAGS%
call:emcc_make zlib/source/compress.c -o out/compress1 %EMCC_FLAGS%
call:emcc_make zlib/source/crc32.c -o out/crc321 %EMCC_FLAGS%
call:emcc_make zlib/source/deflate.c -o out/deflate %EMCC_FLAGS%
call:emcc_make zlib/source/infback.c -o out/infback %EMCC_FLAGS%
call:emcc_make zlib/source/inffast.c -o out/inffast %EMCC_FLAGS%
call:emcc_make zlib/source/inflate.c -o out/inflate %EMCC_FLAGS%
call:emcc_make zlib/source/inftrees.c -o out/inftrees %EMCC_FLAGS%
call:emcc_make zlib/source/trees.c -o out/trees %EMCC_FLAGS%
call:emcc_make zlib/source/uncompr.c -o out/uncompr %EMCC_FLAGS%
call:emcc_make zlib/source/zutil.c -o out/zutil %EMCC_FLAGS%
call:emcc_make utils/common.cpp -o out/common1 --std=c++17 %EMCC_FLAGS%
call:emcc_make webmain.cpp -o out/webmain --std=c++17 %EMCC_FLAGS%
call:emcc_make webarc.cpp -o out/webarc --std=c++17 %EMCC_FLAGS%

:: 链接生成最终模块

::call:emcc_make_x out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/game out/id out/metadata out/objectdata out/slk out/unitdata out/westrings out/wtsdata out/adpcm out/archive out/common out/compress out/huff out/locale out/crc32 out/explode out/implode out/json out/utf8 out/parse out/search out/webmain -o MapParser.mjs -s EXPORT_NAME="MapParser" -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_malloc', '_free']" --post-js module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=134217728 -s DISABLE_EXCEPTION_CATCHING=0
::call:emcc_make_x out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/webarc out/image out/imageblp out/imageblp2 out/imagedds out/imagegif out/imagejpg out/imagepng out/imagetga out/jcapimin out/jcapistd out/jccoefct out/jccolor out/jcdctmgr out/jchuff out/jcinit out/jcmainct out/jcmarker out/jcmaster out/jcomapi out/jcparam out/jcphuff out/jcprepct out/jcsample out/jctrans out/jdapimin out/jdapistd out/jdatadst out/jdatasrc out/jdcoefct out/jdcolor out/jddctmgr out/jdhuff out/jdinput out/jdmainct out/jdmarker out/jdmaster out/jdmerge out/jdphuff out/jdpostct out/jdsample out/jdtrans out/jerror out/jfdctflt out/jfdctfst out/jfdctint out/jidctflt out/jidctfst out/jidctint out/jidctred out/jmemmgr out/jmemnobs out/jquant1 out/jquant2 out/jutils out/jass out/detect out/common -o ArchiveLoader.mjs -s EXPORT_NAME="ArchiveLoader" -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_malloc', '_free']" --post-js module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=5242880
::call:emcc_make_x out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/game out/id out/metadata out/objectdata out/slk out/unitdata out/westrings out/wtsdata out/adpcm out/archive out/common out/compress out/huff out/locale out/crc32 out/explode out/implode out/json out/utf8 out/parse out/search out/webmain -o MapParser.mjs -s EXPORT_NAME="MapParser" -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_malloc', '_free']" --post-js module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=134217728 -s DISABLE_EXCEPTION_CATCHING=0 
::call:emcc_make_x out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/webarc out/image out/imageblp out/imageblp2 out/imagedds out/imagegif out/imagejpg out/imagepng out/imagetga out/jcapimin out/jcapistd out/jccoefct out/jccolor out/jcdctmgr out/jchuff out/jcinit out/jcmainct out/jcmarker out/jcmaster out/jcomapi out/jcparam out/jcphuff out/jcprepct out/jcsample out/jctrans out/jdapimin out/jdapistd out/jdatadst out/jdatasrc out/jdcoefct out/jdcolor out/jddctmgr out/jdhuff out/jdinput out/jdmainct out/jdmarker out/jdmaster out/jdmerge out/jdphuff out/jdpostct out/jdsample out/jdtrans out/jerror out/jfdctflt out/jfdctfst out/jfdctint out/jidctflt out/jidctfst out/jidctint out/jidctred out/jmemmgr out/jmemnobs out/jquant1 out/jquant2 out/jutils out/jass out/detect out/common -o ArchiveLoader.mjs -s EXPORT_NAME="ArchiveLoader" -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_malloc', '_free']" --post-js module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=5242880
::emcc out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/game out/id out/metadata out/objectdata out/slk out/unitdata out/westrings out/wtsdata out/adpcm out/archive out/common out/compress out/huff out/locale out/crc32 out/explode out/implode out/json out/utf8 out/parse out/search out/webmain -o MapParser.mjs -s EXPORT_NAME="MapParser" -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_malloc', '_free']" --post-js ./module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=134217728 -s DISABLE_EXCEPTION_CATCHING=0
::emcc out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/webarc out/image out/imageblp out/imageblp2 out/imagedds out/imagegif out/imagejpg out/imagepng out/imagetga out/jcapimin out/jcapistd out/jccoefct out/jccolor out/jcdctmgr out/jchuff out/jcinit out/jcmainct out/jcmarker out/jcmaster out/jcomapi out/jcparam out/jcphuff out/jcprepct out/jcsample out/jctrans out/jdapimin out/jdapistd out/jdatadst out/jdatasrc out/jdcoefct out/jdcolor out/jddctmgr out/jdhuff out/jdinput out/jdmainct out/jdmarker out/jdmaster out/jdmerge out/jdphuff out/jdpostct out/jdsample out/jdtrans out/jerror out/jfdctflt out/jfdctfst out/jfdctint out/jidctflt out/jidctfst out/jidctint out/jidctred out/jmemmgr out/jmemnobs out/jquant1 out/jquant2 out/jutils out/jass out/detect out/common -o ArchiveLoader.mjs -s EXPORT_NAME="ArchiveLoader" -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_malloc', '_free']" --post-js ./module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=33554432

:: set "MapParser=out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/game out/id out/metadata out/objectdata out/slk out/unitdata out/westrings out/wtsdata out/adpcm out/archive out/common out/compress out/huff out/locale out/crc32 out/explode out/implode out/json out/utf8 out/parse out/search out/webmain -o MapParser.js -O3 -s WASM=1 -s MODULARIZE=1 --post-js ./module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=134217728 -s DISABLE_EXCEPTION_CATCHING=0 -s EXPORT_NAME=""MapParser"""
:: set "ArchiveLoader=out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/webarc out/image out/imageblp out/imageblp2 out/imagedds out/imagegif out/imagejpg out/imagepng out/imagetga out/jcapimin out/jcapistd out/jccoefct out/jccolor out/jcdctmgr out/jchuff out/jcinit out/jcmainct out/jcmarker out/jcmaster out/jcomapi out/jcparam out/jcphuff out/jcprepct out/jcsample out/jctrans out/jdapimin out/jdapistd out/jdatadst out/jdatasrc out/jdcoefct out/jdcolor out/jddctmgr out/jdhuff out/jdinput out/jdmainct out/jdmarker out/jdmaster out/jdmerge out/jdphuff out/jdpostct out/jdsample out/jdtrans out/jerror out/jfdctflt out/jfdctfst out/jfdctint out/jidctflt out/jidctfst out/jidctint out/jidctred out/jmemmgr out/jmemnobs out/jquant1 out/jquant2 out/jutils out/jass out/detect out/common -o ArchiveLoader.js -O3 -s WASM=1 -s MODULARIZE=1 --post-js ./module-post.js -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=33554432 -s EXPORT_NAME=""ArchiveLoader"""
set "MapParser=out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/game out/id out/metadata out/objectdata out/slk out/unitdata out/westrings out/wtsdata out/adpcm out/archive out/common out/compress out/huff out/locale out/crc32 out/explode out/implode out/json out/utf8 out/parse out/search out/webmain -O2 -s WASM=1 -s NO_EXIT_RUNTIME=1 -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE -s SINGLE_FILE=1 -s EXPORT_ES6=1 -s ENVIRONMENT=worker -lembind -s EXPORT_NAME=""MapParser"" -o MapParser.js --post-js ./module-post.js"
set "ArchiveLoader=out/adler32 out/compress1 out/crc321 out/deflate out/infback out/inffast out/inflate out/inftrees out/trees out/uncompr out/zutil out/checksum out/common1 out/file out/path out/strlib out/hash out/webarc out/image out/imageblp out/imageblp2 out/imagedds out/imagegif out/imagejpg out/imagepng out/imagetga out/jcapimin out/jcapistd out/jccoefct out/jccolor out/jcdctmgr out/jchuff out/jcinit out/jcmainct out/jcmarker out/jcmaster out/jcomapi out/jcparam out/jcphuff out/jcprepct out/jcsample out/jctrans out/jdapimin out/jdapistd out/jdatadst out/jdatasrc out/jdcoefct out/jdcolor out/jddctmgr out/jdhuff out/jdinput out/jdmainct out/jdmarker out/jdmaster out/jdmerge out/jdphuff out/jdpostct out/jdsample out/jdtrans out/jerror out/jfdctflt out/jfdctfst out/jfdctint out/jidctflt out/jidctfst out/jidctint out/jidctred out/jmemmgr out/jmemnobs out/jquant1 out/jquant2 out/jutils out/jass out/detect out/common -O2 -s WASM=1 -s NO_EXIT_RUNTIME=1 -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE -s SINGLE_FILE=1 -s EXPORT_ES6=1 -lembind -s EXPORT_NAME=""ArchiveLoader"" -o ArchiveLoader.js --post-js ./module-post.js"
emcc %MapParser% -s EXPORTED_FUNCTIONS="['_malloc', '_free']" && emcc %ArchiveLoader% -s EXPORTED_FUNCTIONS="['_malloc', '_free']"


exit /b 0

:emcc_make
setlocal
set "input_file=%~1"
set "output_file=%~3"
set "timestamp_file=%~3.timestamp"

:: 获取输入文件的最后修改时间
for %%F in ("%input_file%") do set "input_mtime=%%~tF"

setlocal enabledelayedexpansion
:: 计算输入哈希
:: set "hash_data=!input_file!!input_mtime!"
:: for /f %%H in ('echo !hash_data! ^| certutil -hashfile stdin MD5 ^| findstr /v "hash"') do ::set "input_hash=%%H"
set "input_hash=%input_mtime%"

:: 检查时间戳和输出文件
if exist "%timestamp_file%" (
    set "line_number=0"
    for /f "delims=" %%A in (%timestamp_file%) do (
        set /a line_number+=1
        if !line_number! equ 1 ( set "old_hash=%%A" )
    )

    if "%input_hash%" neq "!old_hash!" (
        if exist "%output_file%" ( del "%output_file%" "%output_file%.js" "%output_file%.wasm" "%output_file%.symbols" "%output_file%.timestamp" )
        echo emcc %*
        emcc %*
        if errorlevel 1 exit pause /b 1
        echo %input_hash% > "%timestamp_file%"
    ) else (
        echo [SkipUnchanged] emcc %*
    )
) else (
    if exist "%output_file%" ( del "%output_file%" "%output_file%.js" "%output_file%.wasm" "%output_file%.symbols" "%output_file%.timestamp" )
    echo emcc %*
    emcc %*
    if errorlevel 1 exit pause /b 1
    echo %input_hash%>"%timestamp_file%"
)
endlocal
goto:eof

:: 定义 emcc_make_x 函数
:emcc_make_x

echo emcc %*
emcc %*

if errorlevel 1 exit pause /b 1
goto:eof

