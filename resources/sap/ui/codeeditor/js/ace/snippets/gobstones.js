ace.define("ace/snippets/gobstones",[],function(_,n,T){"use strict";n.snippetText='# scope: gobstones\n\n# program\nsnippet program\n\tprogram {\n\t\t${1:// cuerpo...}\n\t}\n\n# interactive program\nsnippet interactive program\n\tinteractive program {\n\t\t${1:INIT} -> { ${2:// cuerpo...} }\n\t\t${3:TIMEOUT(${4:5000}) -> { ${5:// cuerpo...} }\n\t\t${6:K_ENTER} -> { ${7:// cuerpo...} }\n\t\t_ -> {}\n\t}\n\n# procedure\nsnippet procedure\n\tprocedure ${1:Nombre}(${2:parametros}) {\n\t\t${3:// cuerpo...}\n\t}\n\n# function\nsnippet function\n\tfunction ${1:nombre}(${2:parametros}) {\n\t\treturn (${3:expresión..})\n\t}\n\n# return\nsnippet return\n\treturn (${1:expresión...})\n\n# type\nsnippet type\n\ttype ${1:Nombre}\n\n# is variant\nsnippet is variant\n\tis variant {\n\t\tcase ${1:NombreDelValor1} {}\n\t\tcase ${2:NombreDelValor2} {}\n\t\tcase ${3:NombreDelValor3} {}\n\t\tcase ${4:NombreDelValor4} {}\n\t}\n\n# is record\nsnippet is record\n\tis record {\n\t\tfield ${1:campo1} // ${2:Tipo}\n\t\tfield ${3:campo2} // ${4:Tipo}\n\t\tfield ${5:campo3} // ${6:Tipo}\n\t\tfield ${7:campo4} // ${8:Tipo}\n\t}\n\n# type _ is variant\nsnippet type _ is variant\n\ttype ${1:Nombre} is variant {\n\t\tcase ${2:NombreDelValor1} {}\n\t\tcase ${3:NombreDelValor2} {}\n\t\tcase ${4:NombreDelValor3} {}\n\t\tcase ${5:NombreDelValor4} {}\n\t}\n\n# type _ is record\nsnippet type _ is record\n\ttype ${1:Nombre} is record {\n\t\tfield ${2:campo1} // ${3:Tipo}\n\t\tfield ${4:campo2} // ${5:Tipo}\n\t\tfield ${6:campo3} // ${7:Tipo}\n\t\tfield ${8:campo4} // ${9:Tipo}\n\t}\n\n# repeat\nsnippet repeat\n\trepeat ${1:cantidad} {\n\t\t${2:// cuerpo...}\n\t}\n\n# foreach\nsnippet foreach\n\tforeach ${1:índice} in ${2:lista} {\n\t\t${3:// cuerpo...}\n\t}\n\n# while\nsnippet while\n\twhile (${1?:condición}) {\n\t\t${2:// cuerpo...}\n\t}\n\n# if\nsnippet if\n\tif (${1?:condición}) {\n\t\t${2:// cuerpo...}\n\t}\n\n# elseif\nsnippet elseif\n\telseif (${1?:condición}) {\n\t\t${2:// cuerpo...}\n\t}\n\n# else\nsnippet else\n\telse {\n\t\t${1:// cuerpo...}\n\t}\n\n# if (con else)\nsnippet if (con else)\n\tif (${1:condición}) {\n\t\t${2:// cuerpo...}\n\t} else {\n\t\t${3:// cuerpo....}\n\t}\n\n# if (con elseif)\nsnippet if (con elseif)\n\tif (${1:condición}) {\n\t\t${2:// cuerpo...}\n\t} elseif (${3:condición}) {\n\t\t${4:// cuerpo...}\n\t}\n\n# if (con elseif y else)\nsnippet if (con elseif y else)\n\tif (${1:condición}) {\n\t\t${2:// cuerpo...}\n\t} elseif (${3:condición}) {\n\t\t${4:// cuerpo...}\n\t} else {\n\t\t${5:// cuerpo....}\n\t}\n\n# if (con 3 elseif)\nsnippet if (con 3 elseif)\n\tif (${1:condición}) {\n\t\t${2:// cuerpo...}\n\t} elseif (${3:condición}) {\n\t\t${4:// cuerpo...}\n\t} elseif (${5:condición}) {\n\t\t${6:// cuerpo...}\n\t} elseif (${7:condición}) {\n\t\t${8:// cuerpo...}\n\t}\n\n# choose (2 valores)\nsnippet choose (2 valores)\n\tchoose\n\t\t${1:Valor1} when (${2:condición})\n\t\t${3:Valor2} otherwise\n\n# choose (2 valores y boom)\nsnippet choose (2 valores y boom)\n\tchoose\n\t\t${1:Valor1} when (${2:condición})\n\t\t${3:Valor2} when (${4:condición})\n\t\t${5:Valor3} when (${6:condición})\n\t\t${7:Valor4} when (${8:condición})\n\t\tboom("${9:No es un valor válido}") otherwise\n\n# matching (4 valores)\nsnippet matching (4 valores)\n\tmatching (${1:variable}) select\n\t\t${2:Valor1} on ${3:opción1}\n\t\t${4:Valor2} on ${5:opción2}\n\t\t${6:Valor3} on ${7:opción3}\n\t\t${8:Valor4} on ${9:opción4}\n\t\tboom("${10:No es un valor válido}") otherwise\n\n# select (4 casos)\nsnippet select (4 casos)\n\tselect\n\t\t${1:Valor1} on (${2:opción1})\n\t\t${3:Valor2} on (${4:opción2})\n\t\t${5:Valor3} on (${6:opción3})\n\t\t${7:Valor4} on (${8:opción4})\n\t\tboom("${9:No es un valor válido}") otherwise\n\n# switch\nsnippet switch\n\tswitch (${1:variable}) {\n\t\t${2:Valor1} -> {${3:// cuerpo...}}\n\t\t${4:Valor2} -> {${5:// cuerpo...}}\n\t\t${6:Valor3} -> {${7:// cuerpo...}}\n\t\t${8:Valor4} -> {${9:// cuerpo...}}\n\t\t_ -> {${10:// cuerpo...}}\n\t}\n\n# Poner\nsnippet Poner\n\tPoner(${1:color})\n\n# Sacar\nsnippet Sacar\n\tSacar(${1:color})\n\n# Mover\nsnippet Mover\n\tMover(${1:dirección})\n\n# IrAlBorde\nsnippet IrAlBorde\n\tIrAlBorde(${1:dirección})\n\n# VaciarTablero\nsnippet VaciarTablero\n\tVaciarTablero()\n\n# BOOM\nsnippet BOOM\n\tBOOM("${1:Mensaje de error}")\n\n# hayBolitas\nsnippet hayBolitas\n\thayBolitas(${1:color})\n\n# nroBolitas\nsnippet nroBolitas\n\tnroBolitas(${1:color})\n\n# puedeMover\nsnippet puedeMover\n\tpuedeMover(${1:dirección})\n\n# siguiente\nsnippet siguiente\n\tsiguiente(${1:color|dirección})\n\n# previo\nsnippet previo\n\tprevio(${1:color|dirección})\n\n# opuesto\nsnippet opuesto\n\topuesto(${1:dirección})\n\n# minDir\nsnippet minDir\n\tminDir()\n\n# maxDir\nsnippet maxDir\n\tmaxDir()\n\n# minColor\nsnippet minColor\n\tminDir()\n\n# maxColor\nsnippet maxColor\n\tmaxDir()\n\n# minBool\nsnippet minBool\n\tminBool()\n\n# maxBool\nsnippet maxBool\n\tmaxBool()\n\n# primero\nsnippet primero\n\tprimero(${1:lista})\n\n# sinElPrimero\nsnippet sinElPrimero\n\tsinElPrimero(${1:lista})\n\n# esVacía\nsnippet esVacía\n\tesVacía(${1:lista})\n\n# boom\nsnippet boom\n\tboom("${1:Mensaje de error}")\n\n# Azul\nsnippet Azul\n\tAzul\n\n# Negro\nsnippet Negro\n\tNegro\n\n# Rojo\nsnippet Rojo\n\tRojo\n\n# Verde\nsnippet Verde\n\tVerde\n\n# Norte\nsnippet Norte\n\tNorte\n\n# Este\nsnippet Este\n\tEste\n\n# Sur\nsnippet Sur\n\tSur\n\n# Oeste\nsnippet Oeste\n\tOeste\n\n# True\nsnippet True\n\tTrue\n\n# False\nsnippet False\n\tFalse\n\n# INIT\nsnippet INIT\n\tINIT -> {$1:// cuerpo...}\n\n# TIMEOUT\nsnippet TIMEOUT\n\tTIMEOUT(${1:5000}) -> {$2:// cuerpo...}\n\n# K_A\nsnippet K_A\n\tK_A -> { ${1://cuerpo...} }\n# K_CTRL_A\nsnippet K_CTRL_A\n\tK_CTRL_A -> { ${1://cuerpo...} }\n# K_ALT_A\nsnippet K_ALT_A\n\tK_ALT_A -> { ${1://cuerpo...} }\n# K_SHIFT_A\nsnippet K_SHIFT_A\n\tK_SHIFT_A -> { ${1://cuerpo...} }\n# K_CTRL_ALT_A\nsnippet K_CTRL_ALT_A\n\tK_CTRL_ALT_A -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_A\nsnippet K_CTRL_SHIFT_A\n\tK_CTRL_SHIFT_A -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_A\nsnippet K_CTRL_ALT_SHIFT_A\n\tK_CTRL_ALT_SHIFT_A -> { ${1://cuerpo...} }\n\n# K_B\nsnippet K_B\n\tK_B -> { ${1://cuerpo...} }\n# K_CTRL_B\nsnippet K_CTRL_B\n\tK_CTRL_B -> { ${1://cuerpo...} }\n# K_ALT_B\nsnippet K_ALT_B\n\tK_ALT_B -> { ${1://cuerpo...} }\n# K_SHIFT_B\nsnippet K_SHIFT_B\n\tK_SHIFT_B -> { ${1://cuerpo...} }\n# K_CTRL_ALT_B\nsnippet K_CTRL_ALT_B\n\tK_CTRL_ALT_B -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_B\nsnippet K_CTRL_SHIFT_B\n\tK_CTRL_SHIFT_B -> { ${1://cuerpo...} }\n# K_ALT_SHIFT_C\nsnippet K_ALT_SHIFT_C\n\tK_ALT_SHIFT_C -> { ${1://cuerpo...} }\n# K_CTRL_BLT_SHIFT_B\nsnippet K_CTRL_BLT_SHIFT_B\n\tK_CTRL_ALT_SHIFT_B -> { ${1://cuerpo...} }\n\n# K_C\nsnippet K_C\n\tK_C -> { ${1://cuerpo...} }\n# K_CTRL_C\nsnippet K_CTRL_C\n\tK_CTRL_C -> { ${1://cuerpo...} }\n# K_ALT_C\nsnippet K_ALT_C\n\tK_ALT_C -> { ${1://cuerpo...} }\n# K_SHIFT_C\nsnippet K_SHIFT_C\n\tK_SHIFT_C -> { ${1://cuerpo...} }\n# K_CTRL_ALT_C\nsnippet K_CTRL_ALT_C\n\tK_CTRL_ALT_C -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_C\nsnippet K_CTRL_SHIFT_C\n\tK_CTRL_SHIFT_C -> { ${1://cuerpo...} }\n# K_ALT_SHIFT_C\nsnippet K_ALT_SHIFT_C\n\tK_ALT_SHIFT_C -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_C\nsnippet K_CTRL_ALT_SHIFT_C\n\tK_CTRL_ALT_SHIFT_C -> { ${1://cuerpo...} }\n\n# K_D\nsnippet K_D\n\tK_D -> { ${1://cuerpo...} }\n# K_CTRL_D\nsnippet K_CTRL_D\n\tK_CTRL_D -> { ${1://cuerpo...} }\n# K_ALT_D\nsnippet K_ALT_D\n\tK_DLT_D -> { ${1://cuerpo...} }\n# K_SHIFT_D\nsnippet K_SHIFT_D\n\tK_SHIFT_D -> { ${1://cuerpo...} }\n# K_CTRL_ALT_D\nsnippet K_CTRL_ALT_D\n\tK_CTRL_DLT_D -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_D\nsnippet K_CTRL_SHIFT_D\n\tK_CTRL_SHIFT_D -> { ${1://cuerpo...} }\n# K_ALT_SHIFT_D\nsnippet K_ALT_SHIFT_D\n\tK_ALT_SHIFT_D -> { ${1://cuerpo...} }\n# K_CTRL_DLT_SHIFT_D\nsnippet K_CTRL_DLT_SHIFT_D\n\tK_CTRL_ALT_SHIFT_D -> { ${1://cuerpo...} }\n\n# K_E\nsnippet K_E\n\tK_E -> { ${1://cuerpo...} }\n# K_CTRL_E\nsnippet K_CTRL_E\n\tK_CTRL_E -> { ${1://cuerpo...} }\n# K_ALT_E\nsnippet K_ALT_E\n\tK_ALT_E -> { ${1://cuerpo...} }\n# K_SHIFT_E\nsnippet K_SHIFT_E\n\tK_SHIFT_E -> { ${1://cuerpo...} }\n# K_CTRL_ALT_E\nsnippet K_CTRL_ALT_E\n\tK_CTRL_ALT_E -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_E\nsnippet K_CTRL_SHIFT_E\n\tK_CTRL_SHIFT_E -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_E\nsnippet K_CTRL_ALT_SHIFT_E\n\tK_CTRL_ALT_SHIFT_E -> { ${1://cuerpo...} }\n\n# K_F\nsnippet K_F\n\tK_F -> { ${1://cuerpo...} }\n# K_CTRL_F\nsnippet K_CTRL_F\n\tK_CTRL_F -> { ${1://cuerpo...} }\n# K_ALT_F\nsnippet K_ALT_F\n\tK_ALT_F -> { ${1://cuerpo...} }\n# K_SHIFT_F\nsnippet K_SHIFT_F\n\tK_SHIFT_F -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F\nsnippet K_CTRL_ALT_F\n\tK_CTRL_ALT_F -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F\nsnippet K_CTRL_SHIFT_F\n\tK_CTRL_SHIFT_F -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F\nsnippet K_CTRL_ALT_SHIFT_F\n\tK_CTRL_ALT_SHIFT_F -> { ${1://cuerpo...} }\n\n# K_G\nsnippet K_G\n\tK_G -> { ${1://cuerpo...} }\n# K_CTRL_G\nsnippet K_CTRL_G\n\tK_CTRL_G -> { ${1://cuerpo...} }\n# K_ALT_G\nsnippet K_ALT_G\n\tK_ALT_G -> { ${1://cuerpo...} }\n# K_SHIFT_G\nsnippet K_SHIFT_G\n\tK_SHIFT_G -> { ${1://cuerpo...} }\n# K_CTRL_ALT_G\nsnippet K_CTRL_ALT_G\n\tK_CTRL_ALT_G -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_G\nsnippet K_CTRL_SHIFT_G\n\tK_CTRL_SHIFT_G -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_G\nsnippet K_CTRL_ALT_SHIFT_G\n\tK_CTRL_ALT_SHIFT_G -> { ${1://cuerpo...} }\n\n# K_H\nsnippet K_H\n\tK_H -> { ${1://cuerpo...} }\n# K_CTRL_H\nsnippet K_CTRL_H\n\tK_CTRL_H -> { ${1://cuerpo...} }\n# K_ALT_H\nsnippet K_ALT_H\n\tK_ALT_H -> { ${1://cuerpo...} }\n# K_SHIFT_H\nsnippet K_SHIFT_H\n\tK_SHIFT_H -> { ${1://cuerpo...} }\n# K_CTRL_ALT_H\nsnippet K_CTRL_ALT_H\n\tK_CTRL_ALT_H -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_H\nsnippet K_CTRL_SHIFT_H\n\tK_CTRL_SHIFT_H -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_H\nsnippet K_CTRL_ALT_SHIFT_H\n\tK_CTRL_ALT_SHIFT_H -> { ${1://cuerpo...} }\n\n# K_I\nsnippet K_I\n\tK_I -> { ${1://cuerpo...} }\n# K_CTRL_I\nsnippet K_CTRL_I\n\tK_CTRL_I -> { ${1://cuerpo...} }\n# K_ALT_I\nsnippet K_ALT_I\n\tK_ALT_I -> { ${1://cuerpo...} }\n# K_SHIFT_I\nsnippet K_SHIFT_I\n\tK_SHIFT_I -> { ${1://cuerpo...} }\n# K_CTRL_ALT_I\nsnippet K_CTRL_ALT_I\n\tK_CTRL_ALT_I -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_I\nsnippet K_CTRL_SHIFT_I\n\tK_CTRL_SHIFT_I -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_I\nsnippet K_CTRL_ALT_SHIFT_I\n\tK_CTRL_ALT_SHIFT_I -> { ${1://cuerpo...} }\n\n# K_J\nsnippet K_J\n\tK_J -> { ${1://cuerpo...} }\n# K_CTRL_J\nsnippet K_CTRL_J\n\tK_CTRL_J -> { ${1://cuerpo...} }\n# K_ALT_J\nsnippet K_ALT_J\n\tK_ALT_J -> { ${1://cuerpo...} }\n# K_SHIFT_J\nsnippet K_SHIFT_J\n\tK_SHIFT_J -> { ${1://cuerpo...} }\n# K_CTRL_ALT_J\nsnippet K_CTRL_ALT_J\n\tK_CTRL_ALT_J -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_J\nsnippet K_CTRL_SHIFT_J\n\tK_CTRL_SHIFT_J -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_J\nsnippet K_CTRL_ALT_SHIFT_J\n\tK_CTRL_ALT_SHIFT_J -> { ${1://cuerpo...} }\n\n# K_K\nsnippet K_K\n\tK_K -> { ${1://cuerpo...} }\n# K_CTRL_K\nsnippet K_CTRL_K\n\tK_CTRL_K -> { ${1://cuerpo...} }\n# K_ALT_K\nsnippet K_ALT_K\n\tK_ALT_K -> { ${1://cuerpo...} }\n# K_SHIFT_K\nsnippet K_SHIFT_K\n\tK_SHIFT_K -> { ${1://cuerpo...} }\n# K_CTRL_ALT_K\nsnippet K_CTRL_ALT_K\n\tK_CTRL_ALT_K -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_K\nsnippet K_CTRL_SHIFT_K\n\tK_CTRL_SHIFT_K -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_K\nsnippet K_CTRL_ALT_SHIFT_K\n\tK_CTRL_ALT_SHIFT_K -> { ${1://cuerpo...} }\n\n# K_L\nsnippet K_L\n\tK_L -> { ${1://cuerpo...} }\n# K_CTRL_L\nsnippet K_CTRL_L\n\tK_CTRL_L -> { ${1://cuerpo...} }\n# K_ALT_L\nsnippet K_ALT_L\n\tK_ALT_L -> { ${1://cuerpo...} }\n# K_SHIFT_L\nsnippet K_SHIFT_L\n\tK_SHIFT_L -> { ${1://cuerpo...} }\n# K_CTRL_ALT_L\nsnippet K_CTRL_ALT_L\n\tK_CTRL_ALT_L -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_L\nsnippet K_CTRL_SHIFT_L\n\tK_CTRL_SHIFT_L -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_L\nsnippet K_CTRL_ALT_SHIFT_L\n\tK_CTRL_ALT_SHIFT_L -> { ${1://cuerpo...} }\n\n# K_M\nsnippet K_M\n\tK_M -> { ${1://cuerpo...} }\n# K_CTRL_M\nsnippet K_CTRL_M\n\tK_CTRL_M -> { ${1://cuerpo...} }\n# K_ALT_M\nsnippet K_ALT_M\n\tK_ALT_M -> { ${1://cuerpo...} }\n# K_SHIFT_M\nsnippet K_SHIFT_M\n\tK_SHIFT_M -> { ${1://cuerpo...} }\n# K_CTRL_ALT_M\nsnippet K_CTRL_ALT_M\n\tK_CTRL_ALT_M -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_M\nsnippet K_CTRL_SHIFT_M\n\tK_CTRL_SHIFT_M -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_M\nsnippet K_CTRL_ALT_SHIFT_M\n\tK_CTRL_ALT_SHIFT_M -> { ${1://cuerpo...} }\n\n# K_N\nsnippet K_N\n\tK_N -> { ${1://cuerpo...} }\n# K_CTRL_N\nsnippet K_CTRL_N\n\tK_CTRL_N -> { ${1://cuerpo...} }\n# K_ALT_N\nsnippet K_ALT_N\n\tK_ALT_N -> { ${1://cuerpo...} }\n# K_SHIFT_N\nsnippet K_SHIFT_N\n\tK_SHIFT_N -> { ${1://cuerpo...} }\n# K_CTRL_ALT_N\nsnippet K_CTRL_ALT_N\n\tK_CTRL_ALT_N -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_N\nsnippet K_CTRL_SHIFT_N\n\tK_CTRL_SHIFT_N -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_N\nsnippet K_CTRL_ALT_SHIFT_N\n\tK_CTRL_ALT_SHIFT_N -> { ${1://cuerpo...} }\n\n# K_Ñ\nsnippet K_Ñ\n\tK_Ñ -> { ${1://cuerpo...} }\n# K_CTRL_Ñ\nsnippet K_CTRL_Ñ\n\tK_CTRL_Ñ -> { ${1://cuerpo...} }\n# K_ALT_Ñ\nsnippet K_ALT_Ñ\n\tK_ALT_Ñ -> { ${1://cuerpo...} }\n# K_SHIFT_Ñ\nsnippet K_SHIFT_Ñ\n\tK_SHIFT_Ñ -> { ${1://cuerpo...} }\n# K_CTRL_ALT_Ñ\nsnippet K_CTRL_ALT_Ñ\n\tK_CTRL_ALT_Ñ -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_Ñ\nsnippet K_CTRL_SHIFT_Ñ\n\tK_CTRL_SHIFT_Ñ -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_Ñ\nsnippet K_CTRL_ALT_SHIFT_Ñ\n\tK_CTRL_ALT_SHIFT_Ñ -> { ${1://cuerpo...} }\n\n# K_O\nsnippet K_O\n\tK_O -> { ${1://cuerpo...} }\n# K_CTRL_O\nsnippet K_CTRL_O\n\tK_CTRL_O -> { ${1://cuerpo...} }\n# K_ALT_O\nsnippet K_ALT_O\n\tK_ALT_O -> { ${1://cuerpo...} }\n# K_SHIFT_O\nsnippet K_SHIFT_O\n\tK_SHIFT_O -> { ${1://cuerpo...} }\n# K_CTRL_ALT_O\nsnippet K_CTRL_ALT_O\n\tK_CTRL_ALT_O -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_O\nsnippet K_CTRL_SHIFT_O\n\tK_CTRL_SHIFT_O -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_O\nsnippet K_CTRL_ALT_SHIFT_O\n\tK_CTRL_ALT_SHIFT_O -> { ${1://cuerpo...} }\n\n# K_P\nsnippet K_P\n\tK_P -> { ${1://cuerpo...} }\n# K_CTRL_P\nsnippet K_CTRL_P\n\tK_CTRL_P -> { ${1://cuerpo...} }\n# K_ALT_P\nsnippet K_ALT_P\n\tK_ALT_P -> { ${1://cuerpo...} }\n# K_SHIFT_P\nsnippet K_SHIFT_P\n\tK_SHIFT_P -> { ${1://cuerpo...} }\n# K_CTRL_ALT_P\nsnippet K_CTRL_ALT_P\n\tK_CTRL_ALT_P -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_P\nsnippet K_CTRL_SHIFT_P\n\tK_CTRL_SHIFT_P -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_P\nsnippet K_CTRL_ALT_SHIFT_P\n\tK_CTRL_ALT_SHIFT_P -> { ${1://cuerpo...} }\n\n# K_Q\nsnippet K_Q\n\tK_Q -> { ${1://cuerpo...} }\n# K_CTRL_Q\nsnippet K_CTRL_Q\n\tK_CTRL_Q -> { ${1://cuerpo...} }\n# K_ALT_Q\nsnippet K_ALT_Q\n\tK_ALT_Q -> { ${1://cuerpo...} }\n# K_SHIFT_Q\nsnippet K_SHIFT_Q\n\tK_SHIFT_Q -> { ${1://cuerpo...} }\n# K_CTRL_ALT_Q\nsnippet K_CTRL_ALT_Q\n\tK_CTRL_ALT_Q -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_Q\nsnippet K_CTRL_SHIFT_Q\n\tK_CTRL_SHIFT_Q -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_Q\nsnippet K_CTRL_ALT_SHIFT_Q\n\tK_CTRL_ALT_SHIFT_Q -> { ${1://cuerpo...} }\n\n# K_R\nsnippet K_R\n\tK_R -> { ${1://cuerpo...} }\n# K_CTRL_R\nsnippet K_CTRL_R\n\tK_CTRL_R -> { ${1://cuerpo...} }\n# K_ALT_R\nsnippet K_ALT_R\n\tK_ALT_R -> { ${1://cuerpo...} }\n# K_SHIFT_R\nsnippet K_SHIFT_R\n\tK_SHIFT_R -> { ${1://cuerpo...} }\n# K_CTRL_ALT_R\nsnippet K_CTRL_ALT_R\n\tK_CTRL_ALT_R -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_R\nsnippet K_CTRL_SHIFT_R\n\tK_CTRL_SHIFT_R -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_R\nsnippet K_CTRL_ALT_SHIFT_R\n\tK_CTRL_ALT_SHIFT_R -> { ${1://cuerpo...} }\n\n# K_S\nsnippet K_S\n\tK_S -> { ${1://cuerpo...} }\n# K_CTRL_S\nsnippet K_CTRL_S\n\tK_CTRL_S -> { ${1://cuerpo...} }\n# K_ALT_S\nsnippet K_ALT_S\n\tK_ALT_S -> { ${1://cuerpo...} }\n# K_SHIFT_S\nsnippet K_SHIFT_S\n\tK_SHIFT_S -> { ${1://cuerpo...} }\n# K_CTRL_ALT_S\nsnippet K_CTRL_ALT_S\n\tK_CTRL_ALT_S -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_S\nsnippet K_CTRL_SHIFT_S\n\tK_CTRL_SHIFT_S -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_S\nsnippet K_CTRL_ALT_SHIFT_S\n\tK_CTRL_ALT_SHIFT_S -> { ${1://cuerpo...} }\n\n# K_T\nsnippet K_T\n\tK_T -> { ${1://cuerpo...} }\n# K_CTRL_T\nsnippet K_CTRL_T\n\tK_CTRL_T -> { ${1://cuerpo...} }\n# K_ALT_T\nsnippet K_ALT_T\n\tK_ALT_T -> { ${1://cuerpo...} }\n# K_SHIFT_T\nsnippet K_SHIFT_T\n\tK_SHIFT_T -> { ${1://cuerpo...} }\n# K_CTRL_ALT_T\nsnippet K_CTRL_ALT_T\n\tK_CTRL_ALT_T -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_T\nsnippet K_CTRL_SHIFT_T\n\tK_CTRL_SHIFT_T -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_T\nsnippet K_CTRL_ALT_SHIFT_T\n\tK_CTRL_ALT_SHIFT_T -> { ${1://cuerpo...} }\n\n# K_U\nsnippet K_U\n\tK_U -> { ${1://cuerpo...} }\n# K_CTRL_U\nsnippet K_CTRL_U\n\tK_CTRL_U -> { ${1://cuerpo...} }\n# K_ALT_U\nsnippet K_ALT_U\n\tK_ALT_U -> { ${1://cuerpo...} }\n# K_SHIFT_U\nsnippet K_SHIFT_U\n\tK_SHIFT_U -> { ${1://cuerpo...} }\n# K_CTRL_ALT_U\nsnippet K_CTRL_ALT_U\n\tK_CTRL_ALT_U -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_U\nsnippet K_CTRL_SHIFT_U\n\tK_CTRL_SHIFT_U -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_U\nsnippet K_CTRL_ALT_SHIFT_U\n\tK_CTRL_ALT_SHIFT_U -> { ${1://cuerpo...} }\n\n# K_V\nsnippet K_V\n\tK_V -> { ${1://cuerpo...} }\n# K_CTRL_V\nsnippet K_CTRL_V\n\tK_CTRL_V -> { ${1://cuerpo...} }\n# K_ALT_V\nsnippet K_ALT_V\n\tK_ALT_V -> { ${1://cuerpo...} }\n# K_SHIFT_V\nsnippet K_SHIFT_V\n\tK_SHIFT_V -> { ${1://cuerpo...} }\n# K_CTRL_ALT_V\nsnippet K_CTRL_ALT_V\n\tK_CTRL_ALT_V -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_V\nsnippet K_CTRL_SHIFT_V\n\tK_CTRL_SHIFT_V -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_V\nsnippet K_CTRL_ALT_SHIFT_V\n\tK_CTRL_ALT_SHIFT_V -> { ${1://cuerpo...} }\n\n# K_W\nsnippet K_W\n\tK_W -> { ${1://cuerpo...} }\n# K_CTRL_W\nsnippet K_CTRL_W\n\tK_CTRL_W -> { ${1://cuerpo...} }\n# K_ALT_W\nsnippet K_ALT_W\n\tK_ALT_W -> { ${1://cuerpo...} }\n# K_SHIFT_W\nsnippet K_SHIFT_W\n\tK_SHIFT_W -> { ${1://cuerpo...} }\n# K_CTRL_ALT_W\nsnippet K_CTRL_ALT_W\n\tK_CTRL_ALT_W -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_W\nsnippet K_CTRL_SHIFT_W\n\tK_CTRL_SHIFT_W -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_W\nsnippet K_CTRL_ALT_SHIFT_W\n\tK_CTRL_ALT_SHIFT_W -> { ${1://cuerpo...} }\n\n# K_X\nsnippet K_X\n\tK_X -> { ${1://cuerpo...} }\n# K_CTRL_X\nsnippet K_CTRL_X\n\tK_CTRL_X -> { ${1://cuerpo...} }\n# K_ALT_X\nsnippet K_ALT_X\n\tK_ALT_X -> { ${1://cuerpo...} }\n# K_SHIFT_X\nsnippet K_SHIFT_X\n\tK_SHIFT_X -> { ${1://cuerpo...} }\n# K_CTRL_ALT_X\nsnippet K_CTRL_ALT_X\n\tK_CTRL_ALT_X -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_X\nsnippet K_CTRL_SHIFT_X\n\tK_CTRL_SHIFT_X -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_X\nsnippet K_CTRL_ALT_SHIFT_X\n\tK_CTRL_ALT_SHIFT_X -> { ${1://cuerpo...} }\n\n# K_Y\nsnippet K_Y\n\tK_Y -> { ${1://cuerpo...} }\n# K_CTRL_Y\nsnippet K_CTRL_Y\n\tK_CTRL_Y -> { ${1://cuerpo...} }\n# K_ALT_Y\nsnippet K_ALT_Y\n\tK_ALT_Y -> { ${1://cuerpo...} }\n# K_SHIFT_Y\nsnippet K_SHIFT_Y\n\tK_SHIFT_Y -> { ${1://cuerpo...} }\n# K_CTRL_ALT_Y\nsnippet K_CTRL_ALT_Y\n\tK_CTRL_ALT_Y -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_Y\nsnippet K_CTRL_SHIFT_Y\n\tK_CTRL_SHIFT_Y -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_Y\nsnippet K_CTRL_ALT_SHIFT_Y\n\tK_CTRL_ALT_SHIFT_Y -> { ${1://cuerpo...} }\n\n# K_Z\nsnippet K_Z\n\tK_Z -> { ${1://cuerpo...} }\n# K_CTRL_Z\nsnippet K_CTRL_Z\n\tK_CTRL_Z -> { ${1://cuerpo...} }\n# K_ALT_Z\nsnippet K_ALT_Z\n\tK_ALT_Z -> { ${1://cuerpo...} }\n# K_SHIFT_Z\nsnippet K_SHIFT_Z\n\tK_SHIFT_Z -> { ${1://cuerpo...} }\n# K_CTRL_ALT_Z\nsnippet K_CTRL_ALT_Z\n\tK_CTRL_ALT_Z -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_Z\nsnippet K_CTRL_SHIFT_Z\n\tK_CTRL_SHIFT_Z -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_Z\nsnippet K_CTRL_ALT_SHIFT_Z\n\tK_CTRL_ALT_SHIFT_Z -> { ${1://cuerpo...} }\n\n# K_0\nsnippet K_0\n\tK_0 -> { ${1://cuerpo...} }\n# K_CTRL_0\nsnippet K_CTRL_0\n\tK_CTRL_0 -> { ${1://cuerpo...} }\n# K_ALT_0\nsnippet K_ALT_0\n\tK_ALT_0 -> { ${1://cuerpo...} }\n# K_SHIFT_0\nsnippet K_SHIFT_0\n\tK_SHIFT_0 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_0\nsnippet K_CTRL_ALT_0\n\tK_CTRL_ALT_0 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_0\nsnippet K_CTRL_SHIFT_0\n\tK_CTRL_SHIFT_0 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_0\nsnippet K_CTRL_ALT_SHIFT_0\n\tK_CTRL_ALT_SHIFT_0 -> { ${1://cuerpo...} }\n\n# K_1\nsnippet K_1\n\tK_1 -> { ${1://cuerpo...} }\n# K_CTRL_1\nsnippet K_CTRL_1\n\tK_CTRL_1 -> { ${1://cuerpo...} }\n# K_ALT_1\nsnippet K_ALT_1\n\tK_ALT_1 -> { ${1://cuerpo...} }\n# K_SHIFT_1\nsnippet K_SHIFT_1\n\tK_SHIFT_1 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_1\nsnippet K_CTRL_ALT_1\n\tK_CTRL_ALT_1 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_1\nsnippet K_CTRL_SHIFT_1\n\tK_CTRL_SHIFT_1 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_1\nsnippet K_CTRL_ALT_SHIFT_1\n\tK_CTRL_ALT_SHIFT_1 -> { ${1://cuerpo...} }\n\n# K_2\nsnippet K_2\n\tK_2 -> { ${1://cuerpo...} }\n# K_CTRL_2\nsnippet K_CTRL_2\n\tK_CTRL_2 -> { ${1://cuerpo...} }\n# K_ALT_2\nsnippet K_ALT_2\n\tK_ALT_2 -> { ${1://cuerpo...} }\n# K_SHIFT_2\nsnippet K_SHIFT_2\n\tK_SHIFT_2 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_2\nsnippet K_CTRL_ALT_2\n\tK_CTRL_ALT_2 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_2\nsnippet K_CTRL_SHIFT_2\n\tK_CTRL_SHIFT_2 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_2\nsnippet K_CTRL_ALT_SHIFT_2\n\tK_CTRL_ALT_SHIFT_2 -> { ${1://cuerpo...} }\n\n# K_3\nsnippet K_3\n\tK_3 -> { ${1://cuerpo...} }\n# K_CTRL_3\nsnippet K_CTRL_3\n\tK_CTRL_3 -> { ${1://cuerpo...} }\n# K_ALT_3\nsnippet K_ALT_3\n\tK_ALT_3 -> { ${1://cuerpo...} }\n# K_SHIFT_3\nsnippet K_SHIFT_3\n\tK_SHIFT_3 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_3\nsnippet K_CTRL_ALT_3\n\tK_CTRL_ALT_3 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_3\nsnippet K_CTRL_SHIFT_3\n\tK_CTRL_SHIFT_3 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_3\nsnippet K_CTRL_ALT_SHIFT_3\n\tK_CTRL_ALT_SHIFT_3 -> { ${1://cuerpo...} }\n\n# K_4\nsnippet K_4\n\tK_4 -> { ${1://cuerpo...} }\n# K_CTRL_4\nsnippet K_CTRL_4\n\tK_CTRL_4 -> { ${1://cuerpo...} }\n# K_ALT_4\nsnippet K_ALT_4\n\tK_ALT_4 -> { ${1://cuerpo...} }\n# K_SHIFT_4\nsnippet K_SHIFT_4\n\tK_SHIFT_4 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_4\nsnippet K_CTRL_ALT_4\n\tK_CTRL_ALT_4 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_4\nsnippet K_CTRL_SHIFT_4\n\tK_CTRL_SHIFT_4 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_4\nsnippet K_CTRL_ALT_SHIFT_4\n\tK_CTRL_ALT_SHIFT_4 -> { ${1://cuerpo...} }\n\n# K_5\nsnippet K_5\n\tK_5 -> { ${1://cuerpo...} }\n# K_CTRL_5\nsnippet K_CTRL_5\n\tK_CTRL_5 -> { ${1://cuerpo...} }\n# K_ALT_5\nsnippet K_ALT_5\n\tK_ALT_5 -> { ${1://cuerpo...} }\n# K_SHIFT_5\nsnippet K_SHIFT_5\n\tK_SHIFT_5 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_5\nsnippet K_CTRL_ALT_5\n\tK_CTRL_ALT_5 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_5\nsnippet K_CTRL_SHIFT_5\n\tK_CTRL_SHIFT_5 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_5\nsnippet K_CTRL_ALT_SHIFT_5\n\tK_CTRL_ALT_SHIFT_5 -> { ${1://cuerpo...} }\n\n# K_6\nsnippet K_6\n\tK_6 -> { ${1://cuerpo...} }\n# K_CTRL_6\nsnippet K_CTRL_6\n\tK_CTRL_6 -> { ${1://cuerpo...} }\n# K_ALT_6\nsnippet K_ALT_6\n\tK_ALT_6 -> { ${1://cuerpo...} }\n# K_SHIFT_6\nsnippet K_SHIFT_6\n\tK_SHIFT_6 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_6\nsnippet K_CTRL_ALT_6\n\tK_CTRL_ALT_6 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_6\nsnippet K_CTRL_SHIFT_6\n\tK_CTRL_SHIFT_6 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_6\nsnippet K_CTRL_ALT_SHIFT_6\n\tK_CTRL_ALT_SHIFT_6 -> { ${1://cuerpo...} }\n\n# K_7\nsnippet K_7\n\tK_7 -> { ${1://cuerpo...} }\n# K_CTRL_7\nsnippet K_CTRL_7\n\tK_CTRL_7 -> { ${1://cuerpo...} }\n# K_ALT_7\nsnippet K_ALT_7\n\tK_ALT_7 -> { ${1://cuerpo...} }\n# K_SHIFT_7\nsnippet K_SHIFT_7\n\tK_SHIFT_7 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_7\nsnippet K_CTRL_ALT_7\n\tK_CTRL_ALT_7 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_7\nsnippet K_CTRL_SHIFT_7\n\tK_CTRL_SHIFT_7 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_7\nsnippet K_CTRL_ALT_SHIFT_7\n\tK_CTRL_ALT_SHIFT_7 -> { ${1://cuerpo...} }\n\n# K_8\nsnippet K_8\n\tK_8 -> { ${1://cuerpo...} }\n# K_CTRL_8\nsnippet K_CTRL_8\n\tK_CTRL_8 -> { ${1://cuerpo...} }\n# K_ALT_8\nsnippet K_ALT_8\n\tK_ALT_8 -> { ${1://cuerpo...} }\n# K_SHIFT_8\nsnippet K_SHIFT_8\n\tK_SHIFT_8 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_8\nsnippet K_CTRL_ALT_8\n\tK_CTRL_ALT_8 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_8\nsnippet K_CTRL_SHIFT_8\n\tK_CTRL_SHIFT_8 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_8\nsnippet K_CTRL_ALT_SHIFT_8\n\tK_CTRL_ALT_SHIFT_8 -> { ${1://cuerpo...} }\n\n# K_9\nsnippet K_9\n\tK_9 -> { ${1://cuerpo...} }\n# K_CTRL_9\nsnippet K_CTRL_9\n\tK_CTRL_9 -> { ${1://cuerpo...} }\n# K_ALT_9\nsnippet K_ALT_9\n\tK_ALT_9 -> { ${1://cuerpo...} }\n# K_SHIFT_9\nsnippet K_SHIFT_9\n\tK_SHIFT_9 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_9\nsnippet K_CTRL_ALT_9\n\tK_CTRL_ALT_9 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_9\nsnippet K_CTRL_SHIFT_9\n\tK_CTRL_SHIFT_9 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_9\nsnippet K_CTRL_ALT_SHIFT_9\n\tK_CTRL_ALT_SHIFT_9 -> { ${1://cuerpo...} }\n\n# K_F1\nsnippet K_F1\n\tK_F1 -> { ${1://cuerpo...} }\n# K_CTRL_F1\nsnippet K_CTRL_F1\n\tK_CTRL_F1 -> { ${1://cuerpo...} }\n# K_ALT_F1\nsnippet K_ALT_F1\n\tK_ALT_F1 -> { ${1://cuerpo...} }\n# K_SHIFT_F1\nsnippet K_SHIFT_F1\n\tK_SHIFT_F1 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F1\nsnippet K_CTRL_ALT_F1\n\tK_CTRL_ALT_F1 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F1\nsnippet K_CTRL_SHIFT_F1\n\tK_CTRL_SHIFT_F1 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F1\nsnippet K_CTRL_ALT_SHIFT_F1\n\tK_CTRL_ALT_SHIFT_F1 -> { ${1://cuerpo...} }\n\n# K_F2\nsnippet K_F2\n\tK_F2 -> { ${1://cuerpo...} }\n# K_CTRL_F2\nsnippet K_CTRL_F2\n\tK_CTRL_F2 -> { ${1://cuerpo...} }\n# K_ALT_F2\nsnippet K_ALT_F2\n\tK_ALT_F2 -> { ${1://cuerpo...} }\n# K_SHIFT_F2\nsnippet K_SHIFT_F2\n\tK_SHIFT_F2 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F2\nsnippet K_CTRL_ALT_F2\n\tK_CTRL_ALT_F2 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F2\nsnippet K_CTRL_SHIFT_F2\n\tK_CTRL_SHIFT_F2 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F2\nsnippet K_CTRL_ALT_SHIFT_F2\n\tK_CTRL_ALT_SHIFT_F2 -> { ${1://cuerpo...} }\n\n# K_F3\nsnippet K_F3\n\tK_F3 -> { ${1://cuerpo...} }\n# K_CTRL_F3\nsnippet K_CTRL_F3\n\tK_CTRL_F3 -> { ${1://cuerpo...} }\n# K_ALT_F3\nsnippet K_ALT_F3\n\tK_ALT_F3 -> { ${1://cuerpo...} }\n# K_SHIFT_F3\nsnippet K_SHIFT_F3\n\tK_SHIFT_F3 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F3\nsnippet K_CTRL_ALT_F3\n\tK_CTRL_ALT_F3 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F3\nsnippet K_CTRL_SHIFT_F3\n\tK_CTRL_SHIFT_F3 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F3\nsnippet K_CTRL_ALT_SHIFT_F3\n\tK_CTRL_ALT_SHIFT_F3 -> { ${1://cuerpo...} }\n\n# K_A\nsnippet K_A\n\tK_A -> { ${1://cuerpo...} }\n# K_CTRL_A\nsnippet K_CTRL_A\n\tK_CTRL_A -> { ${1://cuerpo...} }\n# K_ALT_A\nsnippet K_ALT_A\n\tK_ALT_A -> { ${1://cuerpo...} }\n# K_SHIFT_A\nsnippet K_SHIFT_A\n\tK_SHIFT_A -> { ${1://cuerpo...} }\n# K_CTRL_ALT_A\nsnippet K_CTRL_ALT_A\n\tK_CTRL_ALT_A -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_A\nsnippet K_CTRL_SHIFT_A\n\tK_CTRL_SHIFT_A -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_A\nsnippet K_CTRL_ALT_SHIFT_A\n\tK_CTRL_ALT_SHIFT_A -> { ${1://cuerpo...} }\n\n# K_F5\nsnippet K_F5\n\tK_F5 -> { ${1://cuerpo...} }\n# K_CTRL_F5\nsnippet K_CTRL_F5\n\tK_CTRL_F5 -> { ${1://cuerpo...} }\n# K_ALT_F5\nsnippet K_ALT_F5\n\tK_ALT_F5 -> { ${1://cuerpo...} }\n# K_SHIFT_F5\nsnippet K_SHIFT_F5\n\tK_SHIFT_F5 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F5\nsnippet K_CTRL_ALT_F5\n\tK_CTRL_ALT_F5 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F5\nsnippet K_CTRL_SHIFT_F5\n\tK_CTRL_SHIFT_F5 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F5\nsnippet K_CTRL_ALT_SHIFT_F5\n\tK_CTRL_ALT_SHIFT_F5 -> { ${1://cuerpo...} }\n\n# K_F6\nsnippet K_F6\n\tK_F6 -> { ${1://cuerpo...} }\n# K_CTRL_F6\nsnippet K_CTRL_F6\n\tK_CTRL_F6 -> { ${1://cuerpo...} }\n# K_ALT_F6\nsnippet K_ALT_F6\n\tK_ALT_F6 -> { ${1://cuerpo...} }\n# K_SHIFT_F6\nsnippet K_SHIFT_F6\n\tK_SHIFT_F6 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F6\nsnippet K_CTRL_ALT_F6\n\tK_CTRL_ALT_F6 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F6\nsnippet K_CTRL_SHIFT_F6\n\tK_CTRL_SHIFT_F6 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F6\nsnippet K_CTRL_ALT_SHIFT_F6\n\tK_CTRL_ALT_SHIFT_F6 -> { ${1://cuerpo...} }\n\n# K_F7\nsnippet K_F7\n\tK_F7 -> { ${1://cuerpo...} }\n# K_CTRL_F7\nsnippet K_CTRL_F7\n\tK_CTRL_F7 -> { ${1://cuerpo...} }\n# K_ALT_F7\nsnippet K_ALT_F7\n\tK_ALT_F7 -> { ${1://cuerpo...} }\n# K_SHIFT_F7\nsnippet K_SHIFT_F7\n\tK_SHIFT_F7 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F7\nsnippet K_CTRL_ALT_F7\n\tK_CTRL_ALT_F7 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F7\nsnippet K_CTRL_SHIFT_F7\n\tK_CTRL_SHIFT_F7 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F7\nsnippet K_CTRL_ALT_SHIFT_F7\n\tK_CTRL_ALT_SHIFT_F7 -> { ${1://cuerpo...} }\n\n# K_F8\nsnippet K_F8\n\tK_F8 -> { ${1://cuerpo...} }\n# K_CTRL_F8\nsnippet K_CTRL_F8\n\tK_CTRL_F8 -> { ${1://cuerpo...} }\n# K_ALT_F8\nsnippet K_ALT_F8\n\tK_ALT_F8 -> { ${1://cuerpo...} }\n# K_SHIFT_F8\nsnippet K_SHIFT_F8\n\tK_SHIFT_F8 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F8\nsnippet K_CTRL_ALT_F8\n\tK_CTRL_ALT_F8 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F8\nsnippet K_CTRL_SHIFT_F8\n\tK_CTRL_SHIFT_F8 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F8\nsnippet K_CTRL_ALT_SHIFT_F8\n\tK_CTRL_ALT_SHIFT_F8 -> { ${1://cuerpo...} }\n\n# K_F9\nsnippet K_F9\n\tK_F9 -> { ${1://cuerpo...} }\n# K_CTRL_F9\nsnippet K_CTRL_F9\n\tK_CTRL_F9 -> { ${1://cuerpo...} }\n# K_ALT_F9\nsnippet K_ALT_F9\n\tK_ALT_F9 -> { ${1://cuerpo...} }\n# K_SHIFT_F9\nsnippet K_SHIFT_F9\n\tK_SHIFT_F9 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F9\nsnippet K_CTRL_ALT_F9\n\tK_CTRL_ALT_F9 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F9\nsnippet K_CTRL_SHIFT_F9\n\tK_CTRL_SHIFT_F9 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F9\nsnippet K_CTRL_ALT_SHIFT_F9\n\tK_CTRL_ALT_SHIFT_F9 -> { ${1://cuerpo...} }\n\n# K_F10\nsnippet K_F10\n\tK_F10 -> { ${1://cuerpo...} }\n# K_CTRL_F10\nsnippet K_CTRL_F10\n\tK_CTRL_F10 -> { ${1://cuerpo...} }\n# K_ALT_F10\nsnippet K_ALT_F10\n\tK_ALT_F10 -> { ${1://cuerpo...} }\n# K_SHIFT_F10\nsnippet K_SHIFT_F10\n\tK_SHIFT_F10 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F10\nsnippet K_CTRL_ALT_F10\n\tK_CTRL_ALT_F10 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F10\nsnippet K_CTRL_SHIFT_F10\n\tK_CTRL_SHIFT_F10 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F10\nsnippet K_CTRL_ALT_SHIFT_F10\n\tK_CTRL_ALT_SHIFT_F10 -> { ${1://cuerpo...} }\n\n# K_F11\nsnippet K_F11\n\tK_F11 -> { ${1://cuerpo...} }\n# K_CTRL_F11\nsnippet K_CTRL_F11\n\tK_CTRL_F11 -> { ${1://cuerpo...} }\n# K_ALT_F11\nsnippet K_ALT_F11\n\tK_ALT_F11 -> { ${1://cuerpo...} }\n# K_SHIFT_F11\nsnippet K_SHIFT_F11\n\tK_SHIFT_F11 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F11\nsnippet K_CTRL_ALT_F11\n\tK_CTRL_ALT_F11 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F11\nsnippet K_CTRL_SHIFT_F11\n\tK_CTRL_SHIFT_F11 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F11\nsnippet K_CTRL_ALT_SHIFT_F11\n\tK_CTRL_ALT_SHIFT_F11 -> { ${1://cuerpo...} }\n\n# K_F12\nsnippet K_F12\n\tK_F12 -> { ${1://cuerpo...} }\n# K_CTRL_F12\nsnippet K_CTRL_F12\n\tK_CTRL_F12 -> { ${1://cuerpo...} }\n# K_ALT_F12\nsnippet K_ALT_F12\n\tK_ALT_F12 -> { ${1://cuerpo...} }\n# K_SHIFT_F12\nsnippet K_SHIFT_F12\n\tK_SHIFT_F12 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_F12\nsnippet K_CTRL_ALT_F12\n\tK_CTRL_ALT_F12 -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_F12\nsnippet K_CTRL_SHIFT_F12\n\tK_CTRL_SHIFT_F12 -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_F12\nsnippet K_CTRL_ALT_SHIFT_F12\n\tK_CTRL_ALT_SHIFT_F12 -> { ${1://cuerpo...} }\n\n# K_RETURN\nsnippet K_RETURN\n\tK_RETURN -> { ${1://cuerpo...} }\n# K_CTRL_RETURN\nsnippet K_CTRL_RETURN\n\tK_CTRL_RETURN -> { ${1://cuerpo...} }\n# K_ALT_RETURN\nsnippet K_ALT_RETURN\n\tK_ALT_RETURN -> { ${1://cuerpo...} }\n# K_SHIFT_RETURN\nsnippet K_SHIFT_RETURN\n\tK_SHIFT_RETURN -> { ${1://cuerpo...} }\n# K_CTRL_ALT_RETURN\nsnippet K_CTRL_ALT_RETURN\n\tK_CTRL_ALT_RETURN -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_RETURN\nsnippet K_CTRL_SHIFT_RETURN\n\tK_CTRL_SHIFT_RETURN -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_RETURN\nsnippet K_CTRL_ALT_SHIFT_RETURN\n\tK_CTRL_ALT_SHIFT_RETURN -> { ${1://cuerpo...} }\n\n# K_SPACE\nsnippet K_SPACE\n\tK_SPACE -> { ${1://cuerpo...} }\n# K_CTRL_SPACE\nsnippet K_CTRL_SPACE\n\tK_CTRL_SPACE -> { ${1://cuerpo...} }\n# K_ALT_SPACE\nsnippet K_ALT_SPACE\n\tK_ALT_SPACE -> { ${1://cuerpo...} }\n# K_SHIFT_SPACE\nsnippet K_SHIFT_SPACE\n\tK_SHIFT_SPACE -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SPACE\nsnippet K_CTRL_ALT_SPACE\n\tK_CTRL_ALT_SPACE -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_SPACE\nsnippet K_CTRL_SHIFT_SPACE\n\tK_CTRL_SHIFT_SPACE -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_SPACE\nsnippet K_CTRL_ALT_SHIFT_SPACE\n\tK_CTRL_ALT_SHIFT_SPACE -> { ${1://cuerpo...} }\n\n# K_ESCAPE\nsnippet K_ESCAPE\n\tK_ESCAPE -> { ${1://cuerpo...} }\n# K_CTRL_ESCAPE\nsnippet K_CTRL_ESCAPE\n\tK_CTRL_ESCAPE -> { ${1://cuerpo...} }\n# K_ALT_ESCAPE\nsnippet K_ALT_ESCAPE\n\tK_ALT_ESCAPE -> { ${1://cuerpo...} }\n# K_SHIFT_ESCAPE\nsnippet K_SHIFT_ESCAPE\n\tK_SHIFT_ESCAPE -> { ${1://cuerpo...} }\n# K_CTRL_ALT_ESCAPE\nsnippet K_CTRL_ALT_ESCAPE\n\tK_CTRL_ALT_ESCAPE -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_ESCAPE\nsnippet K_CTRL_SHIFT_ESCAPE\n\tK_CTRL_SHIFT_ESCAPE -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_ESCAPE\nsnippet K_CTRL_ALT_SHIFT_ESCAPE\n\tK_CTRL_ALT_SHIFT_ESCAPE -> { ${1://cuerpo...} }\n\n# K_BACKSPACE\nsnippet K_BACKSPACE\n\tK_BACKSPACE -> { ${1://cuerpo...} }\n# K_CTRL_BACKSPACE\nsnippet K_CTRL_BACKSPACE\n\tK_CTRL_BACKSPACE -> { ${1://cuerpo...} }\n# K_ALT_BACKSPACE\nsnippet K_ALT_BACKSPACE\n\tK_ALT_BACKSPACE -> { ${1://cuerpo...} }\n# K_SHIFT_BACKSPACE\nsnippet K_SHIFT_BACKSPACE\n\tK_SHIFT_BACKSPACE -> { ${1://cuerpo...} }\n# K_CTRL_ALT_BACKSPACE\nsnippet K_CTRL_ALT_BACKSPACE\n\tK_CTRL_ALT_BACKSPACE -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_BACKSPACE\nsnippet K_CTRL_SHIFT_BACKSPACE\n\tK_CTRL_SHIFT_BACKSPACE -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_BACKSPACE\nsnippet K_CTRL_ALT_SHIFT_BACKSPACE\n\tK_CTRL_ALT_SHIFT_BACKSPACE -> { ${1://cuerpo...} }\n\n# K_TAB\nsnippet K_TAB\n\tK_TAB -> { ${1://cuerpo...} }\n# K_CTRL_TAB\nsnippet K_CTRL_TAB\n\tK_CTRL_TAB -> { ${1://cuerpo...} }\n# K_ALT_TAB\nsnippet K_ALT_TAB\n\tK_ALT_TAB -> { ${1://cuerpo...} }\n# K_SHIFT_TAB\nsnippet K_SHIFT_TAB\n\tK_SHIFT_TAB -> { ${1://cuerpo...} }\n# K_CTRL_ALT_TAB\nsnippet K_CTRL_ALT_TAB\n\tK_CTRL_ALT_TAB -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_TAB\nsnippet K_CTRL_SHIFT_TAB\n\tK_CTRL_SHIFT_TAB -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_TAB\nsnippet K_CTRL_ALT_SHIFT_TAB\n\tK_CTRL_ALT_SHIFT_TAB -> { ${1://cuerpo...} }\n\n# K_UP\nsnippet K_UP\n\tK_UP -> { ${1://cuerpo...} }\n# K_CTRL_UP\nsnippet K_CTRL_UP\n\tK_CTRL_UP -> { ${1://cuerpo...} }\n# K_ALT_UP\nsnippet K_ALT_UP\n\tK_ALT_UP -> { ${1://cuerpo...} }\n# K_SHIFT_UP\nsnippet K_SHIFT_UP\n\tK_SHIFT_UP -> { ${1://cuerpo...} }\n# K_CTRL_ALT_UP\nsnippet K_CTRL_ALT_UP\n\tK_CTRL_ALT_UP -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_UP\nsnippet K_CTRL_SHIFT_UP\n\tK_CTRL_SHIFT_UP -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_UP\nsnippet K_CTRL_ALT_SHIFT_UP\n\tK_CTRL_ALT_SHIFT_UP -> { ${1://cuerpo...} }\n\n# K_DOWN\nsnippet K_DOWN\n\tK_DOWN -> { ${1://cuerpo...} }\n# K_CTRL_DOWN\nsnippet K_CTRL_DOWN\n\tK_CTRL_DOWN -> { ${1://cuerpo...} }\n# K_ALT_DOWN\nsnippet K_ALT_DOWN\n\tK_ALT_DOWN -> { ${1://cuerpo...} }\n# K_SHIFT_DOWN\nsnippet K_SHIFT_DOWN\n\tK_SHIFT_DOWN -> { ${1://cuerpo...} }\n# K_CTRL_ALT_DOWN\nsnippet K_CTRL_ALT_DOWN\n\tK_CTRL_ALT_DOWN -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_DOWN\nsnippet K_CTRL_SHIFT_DOWN\n\tK_CTRL_SHIFT_DOWN -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_DOWN\nsnippet K_CTRL_ALT_SHIFT_DOWN\n\tK_CTRL_ALT_SHIFT_DOWN -> { ${1://cuerpo...} }\n\n# K_LEFT\nsnippet K_LEFT\n\tK_LEFT -> { ${1://cuerpo...} }\n# K_CTRL_LEFT\nsnippet K_CTRL_LEFT\n\tK_CTRL_LEFT -> { ${1://cuerpo...} }\n# K_ALT_LEFT\nsnippet K_ALT_LEFT\n\tK_ALT_LEFT -> { ${1://cuerpo...} }\n# K_SHIFT_LEFT\nsnippet K_SHIFT_LEFT\n\tK_SHIFT_LEFT -> { ${1://cuerpo...} }\n# K_CTRL_ALT_LEFT\nsnippet K_CTRL_ALT_LEFT\n\tK_CTRL_ALT_LEFT -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_LEFT\nsnippet K_CTRL_SHIFT_LEFT\n\tK_CTRL_SHIFT_LEFT -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_LEFT\nsnippet K_CTRL_ALT_SHIFT_LEFT\n\tK_CTRL_ALT_SHIFT_LEFT -> { ${1://cuerpo...} }\n\n# K_RIGHT\nsnippet K_RIGHT\n\tK_RIGHT -> { ${1://cuerpo...} }\n# K_CTRL_RIGHT\nsnippet K_CTRL_RIGHT\n\tK_CTRL_RIGHT -> { ${1://cuerpo...} }\n# K_ALT_RIGHT\nsnippet K_ALT_RIGHT\n\tK_ALT_RIGHT -> { ${1://cuerpo...} }\n# K_SHIFT_RIGHT\nsnippet K_SHIFT_RIGHT\n\tK_SHIFT_RIGHT -> { ${1://cuerpo...} }\n# K_CTRL_ALT_RIGHT\nsnippet K_CTRL_ALT_RIGHT\n\tK_CTRL_ALT_RIGHT -> { ${1://cuerpo...} }\n# K_CTRL_SHIFT_RIGHT\nsnippet K_CTRL_SHIFT_RIGHT\n\tK_CTRL_SHIFT_RIGHT -> { ${1://cuerpo...} }\n# K_CTRL_ALT_SHIFT_RIGHT\nsnippet K_CTRL_ALT_SHIFT_RIGHT\n\tK_CTRL_ALT_SHIFT_RIGHT -> { ${1://cuerpo...} }\n\n# recorrido (simple)\nsnippet recorrido (simple)\n\t${1:// Ir al inicio}\n\twhile (not ${2:// es último elemento}) {\n\t\t${3:// Procesar el elemento}\n\t\t${4:// Ir al próximo elemento}\n\t}\n\t${5:// Finalizar}\n\n# recorrido (de acumulación)\nsnippet recorrido (de acumulación)\n\t${1:// Ir al inicio}\n\t${2:cantidadVistos} := ${3:// contar elementos en lugar actual}\n\twhile (not ${4:// es último elemento}) {\n\t\t${4:// Ir al próximo elemento}\n\t\t${2:cantidadVistos} := ${2:cantidadVistos} + ${3:// contar elementos en lugar actual}\n\t}\n\treturn (${2:cantidadVistos})\n\n# recorrido (de búsqueda)\nsnippet recorrido (de búsqueda)\n\t${1:// Ir al inicio}\n\twhile (not ${2:// encontré lo que buscaba}) {\n\t\t${3:// Ir al próximo elemento}\n\t}\n\treturn (${2:// encontré lo que buscaba })\n\n# recorrido (de búsqueda con borde)\nsnippet recorrido (de búsqueda con borde)\n\t${1:// Ir al inicio}\n\twhile (not ${2:// encontré lo que buscaba} && not ${3:// es último elemento}) {\n\t\t${4:// Ir al próximo elemento}\n\t}\n\treturn (${2:// encontré lo que buscaba })\n\n# recorrido (de tipos enumerativos)\nsnippet recorrido (de tipos enumerativos)\n\t${1:elementoActual} := ${2:minElemento()}\n\twhile (${1:elementoActual} /= ${3:maxElemento()}) {\n\t\t${4:// Procesar con elemento actual}\n\t\t${1:elementoActual} := siguiente(${1:elementoActual})\n\t}\n\t${4:// Procesar con elemento actual}\n\n# recorrido (de búsqueda sobre lista)\nsnippet recorrido (de búsqueda sobre lista)\n\t${1:listaRecorrida} := ${2:lista}\n\twhile (primero(${1:listaRecorrida}) /= ${3://elemento buscado}) {\n\t\t${1:elementoActual} := sinElPrimero(${1:elementoActual})\n\t}\n\treturn (primero(${1:listaRecorrida}))\n\n# recorrido (de búsqueda sobre lista con borde)\nsnippet recorrido (de búsqueda sobre lista con borde)\n\t${1:listaRecorrida} := ${2:lista}\n\twhile (not esVacía(${1:listaRecorrida}) && primero(${1:listaRecorrida}) /= ${3://elemento buscado}) {\n\t\t${1:elementoActual} := sinElPrimero(${1:elementoActual})\n\t}\n\treturn (not esVacía(${1:listaRecorrida}))\n\n# docs (procedimiento)\nsnippet docs (procedimiento)\n\t/*\n\t\t@PROPÓSITO: ${1:...}\n\t\t@PRECONDICIÓN: ${2:...}\n\t*/\n\n# docs (procedimiento con parámetros)\nsnippet docs (procedimiento con parámetros)\n\t/*\n\t\t@PROPÓSITO: ${1:...}\n\t\t@PRECONDICIÓN: ${2:...}\n\t\t@PARÁMETROS:\n\t\t\t\t* ${3:nombreDelParámetro} : ${4:Tipo} - ${5:descripción}\n\t*/\n\n# docs (función)\nsnippet docs (función)\n\t/*\n\t\t@PROPÓSITO: ${1:...}\n\t\t@PRECONDICIÓN: ${2:...}\n\t\t@TIPO: ${3:...}\n\t*/\n\n# docs (función con parámetros)\nsnippet docs (función con parámetros)\n\t/*\n\t\t@PROPÓSITO: ${1:...}\n\t\t@PRECONDICIÓN: ${2:...}\n\t\t@PARÁMETROS:\n\t\t\t\t* ${3:nombreDelParámetro} : ${4:Tipo} - ${5:descripción}\n\t\t@TIPO: ${6:...}\n\t*/\n';n.scope="gobstones"});(function(){ace.require(["ace/snippets/gobstones"],function(_){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=_}})})();
//# sourceMappingURL=gobstones.js.map