var indigoApiData = {};
indigoApiData.funcs =
[
  {
    "funcName": "indigoVersion",
    "funcType": "const char *",
    "params": []
  },
  {
    "funcName": "indigoAllocSessionId",
    "funcType": "qword",
    "params": []
  },
  {
    "funcName": "indigoSetSessionId",
    "funcType": "void",
    "params": [
      {
        "paramName": "id",
        "paramType": "qword"
      }
    ]
  },
  {
    "funcName": "indigoReleaseSessionId",
    "funcType": "void",
    "params": [
      {
        "paramName": "id",
        "paramType": "qword"
      }
    ]
  },
  {
    "funcName": "indigoGetLastError",
    "funcType": "const char *",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoSetErrorHandler",
    "funcType": "void",
    "params": [
      {
        "paramName": "handler",
        "paramType": "INDIGO_ERROR_HANDLER"
      },
      {
        "paramName": "context",
        "paramType": "void*"
      }
    ]
  },
  {
    "funcName": "indigoFree",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClone",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountReferences",
    "funcType": "int",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoFreeAllObjects",
    "funcType": "int",
    "params": []
  },
  {
    "funcName": "indigoSetOption",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetOptionInt",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetOptionBool",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetOptionFloat",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoSetOptionColor",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "r",
        "paramType": "float"
      },
      {
        "paramName": "g",
        "paramType": "float"
      },
      {
        "paramName": "b",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoSetOptionXY",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "x",
        "paramType": "int"
      },
      {
        "paramName": "y",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetOptions",
    "funcType": "int",
    "params": []
  },
  {
    "funcName": "indigoReadFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoReadString",
    "funcType": "int",
    "params": [
      {
        "paramName": "str",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadString",
    "funcType": "int",
    "params": [
      {
        "paramName": "str",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoReadBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoWriteFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoWriteBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoClose",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoNext",
    "funcType": "int",
    "params": [
      {
        "paramName": "iter",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoHasNext",
    "funcType": "int",
    "params": [
      {
        "paramName": "iter",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIndex",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoRemove",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCreateMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoCreateQueryMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoLoadMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadMoleculeFromString",
    "funcType": "int",
    "params": [
      {
        "paramName": "string",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadMoleculeFromFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadMoleculeFromBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryMoleculeFromString",
    "funcType": "int",
    "params": [
      {
        "paramName": "string",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryMoleculeFromFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryMoleculeFromBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadSmarts",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadSmartsFromString",
    "funcType": "int",
    "params": [
      {
        "paramName": "string",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadSmartsFromFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadSmartsFromBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveMolfile",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveMolfileToFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoMolfile",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveCml",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      },
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveCmlToFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      },
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoCml",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveCdxml",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      },
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveCdxmlToFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      },
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoCdxml",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveMDLCT",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoNameToStructure",
    "funcType": "int",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "params",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadReaction",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionFromString",
    "funcType": "int",
    "params": [
      {
        "paramName": "string",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionFromFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionFromBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryReaction",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryReactionFromString",
    "funcType": "int",
    "params": [
      {
        "paramName": "string",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryReactionFromFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadQueryReactionFromBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionSmarts",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionSmartsFromString",
    "funcType": "int",
    "params": [
      {
        "paramName": "string",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionSmartsFromFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoLoadReactionSmartsFromBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "buffer",
        "paramType": "const char*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCreateReaction",
    "funcType": "int",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoCreateQueryReaction",
    "funcType": "int",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoAddReactant",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddProduct",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddCatalyst",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountReactants",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountProducts",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountCatalysts",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountMolecules",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateReactants",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateProducts",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateCatalysts",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateMolecules",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveRxnfile",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSaveRxnfileToFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoRxnfile",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoOptimize",
    "funcType": "int",
    "params": [
      {
        "paramName": "query",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoNormalize",
    "funcType": "int",
    "params": [
      {
        "paramName": "structure",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoStandardize",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIonize",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "pH",
        "paramType": "float"
      },
      {
        "paramName": "pH_toll",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoBuildPkaModel",
    "funcType": "int",
    "params": [
      {
        "paramName": "max_level",
        "paramType": "int"
      },
      {
        "paramName": "threshold",
        "paramType": "float"
      },
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoGetAcidPkaValue",
    "funcType": "float *",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "level",
        "paramType": "int"
      },
      {
        "paramName": "min_level",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetBasicPkaValue",
    "funcType": "float *",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "level",
        "paramType": "int"
      },
      {
        "paramName": "min_level",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAutomap",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "mode",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoGetAtomMappingNumber",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "reaction_atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetAtomMappingNumber",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "reaction_atom",
        "paramType": "int"
      },
      {
        "paramName": "number",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetReactingCenter",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "reaction_bond",
        "paramType": "int"
      },
      {
        "paramName": "rc",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoSetReactingCenter",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "reaction_bond",
        "paramType": "int"
      },
      {
        "paramName": "rc",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearAAM",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCorrectReactingCenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateAtoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIteratePseudoatoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateRSites",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateStereocenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateAlleneCenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateRGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountRGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIsPseudoatom",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIsRSite",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoStereocenterType",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoChangeStereocenterType",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoStereocenterGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetStereocenterGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "group",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoStereocenterPyramid",
    "funcType": "const int*",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSingleAllowedRGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "rsite",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddStereocenter",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "int"
      },
      {
        "paramName": "v1",
        "paramType": "int"
      },
      {
        "paramName": "v2",
        "paramType": "int"
      },
      {
        "paramName": "v3",
        "paramType": "int"
      },
      {
        "paramName": "v4",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateRGroupFragments",
    "funcType": "int",
    "params": [
      {
        "paramName": "rgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountAttachmentPoints",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateAttachmentPoints",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "order",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSymbol",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDegree",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetCharge",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "charge",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoGetExplicitValence",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "valence",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoSetExplicitValence",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "valence",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAtomicNumber",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIsotope",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoValence",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCheckValence",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCheckQuery",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCheckRGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountHydrogens",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "hydro",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoCountImplicitHydrogens",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoXYZ",
    "funcType": "float *",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetXYZ",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "x",
        "paramType": "float"
      },
      {
        "paramName": "y",
        "paramType": "float"
      },
      {
        "paramName": "z",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoCountSuperatoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountDataSGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountRepeatingUnits",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountMultipleGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountGenericSGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateDataSGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateSuperatoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateGenericSGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateRepeatingUnits",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateMultipleGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateSGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSuperatom",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetDataSGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetGenericSGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetMultipleGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetRepeatingUnit",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDescription",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "data_sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoData",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "data_sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddDataSGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "natoms",
        "paramType": "int"
      },
      {
        "paramName": "atoms",
        "paramType": "int*"
      },
      {
        "paramName": "nbonds",
        "paramType": "int"
      },
      {
        "paramName": "bonds",
        "paramType": "int*"
      },
      {
        "paramName": "description",
        "paramType": "const char*"
      },
      {
        "paramName": "data",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAddSuperatom",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "natoms",
        "paramType": "int"
      },
      {
        "paramName": "atoms",
        "paramType": "int*"
      },
      {
        "paramName": "name",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetDataSGroupXY",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "x",
        "paramType": "float"
      },
      {
        "paramName": "y",
        "paramType": "float"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupData",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "data",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupCoords",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "x",
        "paramType": "float"
      },
      {
        "paramName": "y",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupDescription",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "description",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupFieldName",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "name",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupQueryCode",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "querycode",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupQueryOper",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "queryoper",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupDisplay",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "option",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupLocation",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "option",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupTag",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "tag",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupTagAlign",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "tag_align",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupDataType",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupXCoord",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "x",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupYCoord",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "y",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoCreateSGroup",
    "funcType": "int",
    "params": [
      {
        "paramName": "type",
        "paramType": "const char*"
      },
      {
        "paramName": "mapping",
        "paramType": "int"
      },
      {
        "paramName": "name",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupClass",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupName",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupClass",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "sgclass",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupName",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "sgname",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupNumCrossBonds",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddSGroupAttachmentPoint",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "aidx",
        "paramType": "int"
      },
      {
        "paramName": "lvidx",
        "paramType": "int"
      },
      {
        "paramName": "apid",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoDeleteSGroupAttachmentPoint",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupDisplayOption",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupDisplayOption",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "option",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupSeqId",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupMultiplier",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupMultiplier",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "multiplier",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetRepeatingUnitSubscript",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetRepeatingUnitConnectivity",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupBrackets",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "brk_style",
        "paramType": "int"
      },
      {
        "paramName": "x1",
        "paramType": "float"
      },
      {
        "paramName": "y1",
        "paramType": "float"
      },
      {
        "paramName": "x2",
        "paramType": "float"
      },
      {
        "paramName": "y2",
        "paramType": "float"
      },
      {
        "paramName": "x3",
        "paramType": "float"
      },
      {
        "paramName": "y3",
        "paramType": "float"
      },
      {
        "paramName": "x4",
        "paramType": "float"
      },
      {
        "paramName": "y4",
        "paramType": "float"
      }
    ]
  },
  {
    "funcName": "indigoFindSGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "property",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupType",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupIndex",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupOriginalId",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupOriginalId",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "original",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetSGroupParentId",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetSGroupParentId",
    "funcType": "int",
    "params": [
      {
        "paramName": "sgroup",
        "paramType": "int"
      },
      {
        "paramName": "parent",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTransformSCSRtoCTAB",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTransformCTABtoSCSR",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "templates",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetCharge",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetExplicitValence",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetIsotope",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetAttachmentPoint",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "order",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearAttachmentPoints",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoRemoveConstraints",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAddConstraint",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAddConstraintNot",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAddConstraintOr",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoResetStereo",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoInvertStereo",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountAtoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountBonds",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountPseudoatoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountRSites",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateBonds",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoBondOrder",
    "funcType": "int",
    "params": [
      {
        "paramName": "bond",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoBondStereo",
    "funcType": "int",
    "params": [
      {
        "paramName": "bond",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTopology",
    "funcType": "int",
    "params": [
      {
        "paramName": "bond",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateNeighbors",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoBond",
    "funcType": "int",
    "params": [
      {
        "paramName": "nei",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetAtom",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "idx",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetBond",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "idx",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSource",
    "funcType": "int",
    "params": [
      {
        "paramName": "bond",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDestination",
    "funcType": "int",
    "params": [
      {
        "paramName": "bond",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearCisTrans",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearStereocenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountStereocenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearAlleneCenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountAlleneCenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetSymmetricCisTrans",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetSymmetricStereocenters",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMarkEitherCisTrans",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMarkStereobonds",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoValidateChirality",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddAtom",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "symbol",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoResetAtom",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "symbol",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAddRSite",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "name",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetRSite",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "name",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetCharge",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "charge",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetIsotope",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "isotope",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetRadicalElectrons",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "electrons",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoGetRadical",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "radical",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoSetRadical",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "radical",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoResetRadical",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetImplicitHCount",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      },
      {
        "paramName": "impl_h",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddBond",
    "funcType": "int",
    "params": [
      {
        "paramName": "source",
        "paramType": "int"
      },
      {
        "paramName": "destination",
        "paramType": "int"
      },
      {
        "paramName": "order",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetBondOrder",
    "funcType": "int",
    "params": [
      {
        "paramName": "bond",
        "paramType": "int"
      },
      {
        "paramName": "order",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMerge",
    "funcType": "int",
    "params": [
      {
        "paramName": "where_to",
        "paramType": "int"
      },
      {
        "paramName": "what",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoHighlight",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoUnhighlight",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIsHighlighted",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountComponents",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoComponentIndex",
    "funcType": "int",
    "params": [
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateComponents",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoComponent",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountSSSR",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateSSSR",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateSubtrees",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "min_atoms",
        "paramType": "int"
      },
      {
        "paramName": "max_atoms",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateRings",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "min_atoms",
        "paramType": "int"
      },
      {
        "paramName": "max_atoms",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateEdgeSubmolecules",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "min_bonds",
        "paramType": "int"
      },
      {
        "paramName": "max_bonds",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountHeavyAtoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGrossFormula",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMolecularWeight",
    "funcType": "double",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMostAbundantMass",
    "funcType": "double",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMonoisotopicMass",
    "funcType": "double",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMassComposition",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCanonicalSmiles",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLayeredCode",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSymmetryClasses",
    "funcType": "const int *",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "count_out",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoHasCoord",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoHasZCoord",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIsChiral",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIsPossibleFischerProjection",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoCreateSubmolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "nvertices",
        "paramType": "int"
      },
      {
        "paramName": "vertices",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoCreateEdgeSubmolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "nvertices",
        "paramType": "int"
      },
      {
        "paramName": "vertices",
        "paramType": "int*"
      },
      {
        "paramName": "nedges",
        "paramType": "int"
      },
      {
        "paramName": "edges",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoGetSubmolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "nvertices",
        "paramType": "int"
      },
      {
        "paramName": "vertices",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoRemoveAtoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "nvertices",
        "paramType": "int"
      },
      {
        "paramName": "vertices",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoRemoveBonds",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "nbonds",
        "paramType": "int"
      },
      {
        "paramName": "bonds",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoAlignAtoms",
    "funcType": "float",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "natoms",
        "paramType": "int"
      },
      {
        "paramName": "atom_ids",
        "paramType": "int*"
      },
      {
        "paramName": "desired_xyz",
        "paramType": "float*"
      }
    ]
  },
  {
    "funcName": "indigoAromatize",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDearomatize",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoFoldHydrogens",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoUnfoldHydrogens",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoLayout",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClean2d",
    "funcType": "int",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSmiles",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSmarts",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCanonicalSmarts",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoExactMatch",
    "funcType": "int",
    "params": [
      {
        "paramName": "item1",
        "paramType": "int"
      },
      {
        "paramName": "item2",
        "paramType": "int"
      },
      {
        "paramName": "flags",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetTautomerRule",
    "funcType": "int",
    "params": [
      {
        "paramName": "id",
        "paramType": "int"
      },
      {
        "paramName": "beg",
        "paramType": "const char*"
      },
      {
        "paramName": "end",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoRemoveTautomerRule",
    "funcType": "int",
    "params": [
      {
        "paramName": "id",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearTautomerRules",
    "funcType": "int",
    "params": []
  },
  {
    "funcName": "indigoName",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSetName",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "name",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSerialize",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "buf",
        "paramType": "byte**"
      },
      {
        "paramName": "size",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoUnserialize",
    "funcType": "int",
    "params": [
      {
        "paramName": "buf",
        "paramType": "const byte*"
      },
      {
        "paramName": "size",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoHasProperty",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "prop",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoGetProperty",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "prop",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoSetProperty",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "prop",
        "paramType": "const char*"
      },
      {
        "paramName": "value",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoRemoveProperty",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "prop",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIterateProperties",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClearProperties",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCheckBadValence",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCheckAmbiguousH",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoFingerprint",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "type",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoCountBits",
    "funcType": "int",
    "params": [
      {
        "paramName": "fingerprint",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCommonBits",
    "funcType": "int",
    "params": [
      {
        "paramName": "fingerprint1",
        "paramType": "int"
      },
      {
        "paramName": "fingerprint2",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoOneBitsList",
    "funcType": "const char*",
    "params": [
      {
        "paramName": "fingerprint",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSimilarity",
    "funcType": "float",
    "params": [
      {
        "paramName": "item1",
        "paramType": "int"
      },
      {
        "paramName": "item2",
        "paramType": "int"
      },
      {
        "paramName": "metrics",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIterateSDF",
    "funcType": "int",
    "params": [
      {
        "paramName": "reader",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateRDF",
    "funcType": "int",
    "params": [
      {
        "paramName": "reader",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateSmiles",
    "funcType": "int",
    "params": [
      {
        "paramName": "reader",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateCML",
    "funcType": "int",
    "params": [
      {
        "paramName": "reader",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateCDX",
    "funcType": "int",
    "params": [
      {
        "paramName": "reader",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateSDFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIterateRDFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIterateSmilesFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIterateCMLFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIterateCDXFile",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoRawData",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTell",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTell64",
    "funcType": "long long",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSdfAppend",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      },
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSmilesAppend",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      },
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoRdfHeader",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoRdfAppend",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      },
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCmlHeader",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCmlAppend",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      },
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCmlFooter",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCreateSaver",
    "funcType": "int",
    "params": [
      {
        "paramName": "output",
        "paramType": "int"
      },
      {
        "paramName": "format",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoCreateFileSaver",
    "funcType": "int",
    "params": [
      {
        "paramName": "filename",
        "paramType": "const char*"
      },
      {
        "paramName": "format",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAppend",
    "funcType": "int",
    "params": [
      {
        "paramName": "saver",
        "paramType": "int"
      },
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCreateArray",
    "funcType": "int",
    "params": []
  },
  {
    "funcName": "indigoArrayAdd",
    "funcType": "int",
    "params": [
      {
        "paramName": "arr",
        "paramType": "int"
      },
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAt",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      },
      {
        "paramName": "index",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCount",
    "funcType": "int",
    "params": [
      {
        "paramName": "item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoClear",
    "funcType": "int",
    "params": [
      {
        "paramName": "arr",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateArray",
    "funcType": "int",
    "params": [
      {
        "paramName": "arr",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoSubstructureMatcher",
    "funcType": "int",
    "params": [
      {
        "paramName": "target",
        "paramType": "int"
      },
      {
        "paramName": "mode",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoIgnoreAtom",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      },
      {
        "paramName": "atom_object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoUnignoreAtom",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      },
      {
        "paramName": "atom_object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoUnignoreAllAtoms",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMatch",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      },
      {
        "paramName": "query",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountMatches",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      },
      {
        "paramName": "query",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCountMatchesWithLimit",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      },
      {
        "paramName": "query",
        "paramType": "int"
      },
      {
        "paramName": "embeddings_limit",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateMatches",
    "funcType": "int",
    "params": [
      {
        "paramName": "matcher",
        "paramType": "int"
      },
      {
        "paramName": "query",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoHighlightedTarget",
    "funcType": "int",
    "params": [
      {
        "paramName": "match",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMapAtom",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "atom",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMapBond",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "bond",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoMapMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateTautomers",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoExtractCommonScaffold",
    "funcType": "int",
    "params": [
      {
        "paramName": "structures",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoAllScaffolds",
    "funcType": "int",
    "params": [
      {
        "paramName": "extracted",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDecomposeMolecules",
    "funcType": "int",
    "params": [
      {
        "paramName": "scaffold",
        "paramType": "int"
      },
      {
        "paramName": "structures",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDecomposedMoleculeScaffold",
    "funcType": "int",
    "params": [
      {
        "paramName": "decomp",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateDecomposedMolecules",
    "funcType": "int",
    "params": [
      {
        "paramName": "decomp",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDecomposedMoleculeHighlighted",
    "funcType": "int",
    "params": [
      {
        "paramName": "decomp",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDecomposedMoleculeWithRGroups",
    "funcType": "int",
    "params": [
      {
        "paramName": "decomp",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoCreateDecomposer",
    "funcType": "int",
    "params": [
      {
        "paramName": "scaffold",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDecomposeMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "decomp",
        "paramType": "int"
      },
      {
        "paramName": "mol",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoIterateDecompositions",
    "funcType": "int",
    "params": [
      {
        "paramName": "deco_item",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoAddDecomposition",
    "funcType": "int",
    "params": [
      {
        "paramName": "decomp",
        "paramType": "int"
      },
      {
        "paramName": "q_match",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoGetFragmentedMolecule",
    "funcType": "int",
    "params": [
      {
        "paramName": "elem",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoRGroupComposition",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      },
      {
        "paramName": "options",
        "paramType": "const char*"
      }
    ]
  },
  {
    "funcName": "indigoExpandAbbreviations",
    "funcType": "int",
    "params": [
      {
        "paramName": "molecule",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoToString",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoToBuffer",
    "funcType": "int",
    "params": [
      {
        "paramName": "handle",
        "paramType": "int"
      },
      {
        "paramName": "buf",
        "paramType": "char**"
      },
      {
        "paramName": "size",
        "paramType": "int*"
      }
    ]
  },
  {
    "funcName": "indigoReactionProductEnumerate",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "monomers",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTransform",
    "funcType": "int",
    "params": [
      {
        "paramName": "reaction",
        "paramType": "int"
      },
      {
        "paramName": "monomers",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoTransformHELMtoSCSR",
    "funcType": "int",
    "params": [
      {
        "paramName": "monomer",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDbgInternalType",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "object",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDbgBreakpoint",
    "funcType": "void",
    "params": [
      {
        "paramName": null,
        "paramType": "void"
      }
    ]
  },
  {
    "funcName": "indigoDbgProfiling",
    "funcType": "const char *",
    "params": [
      {
        "paramName": "whole_session",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDbgResetProfiling",
    "funcType": "int",
    "params": [
      {
        "paramName": "whole_session",
        "paramType": "int"
      }
    ]
  },
  {
    "funcName": "indigoDbgProfilingGetCounter",
    "funcType": "qword",
    "params": [
      {
        "paramName": "name",
        "paramType": "const char*"
      },
      {
        "paramName": "whole_session",
        "paramType": "int"
      }
    ]
  }
];

indigoApiData.funcTypes =
{
  "const char *": [
    "indigoVersion",
    "indigoGetLastError",
    "indigoMolfile",
    "indigoCml",
    "indigoCdxml",
    "indigoRxnfile",
    "indigoSymbol",
    "indigoDescription",
    "indigoData",
    "indigoGetSGroupClass",
    "indigoGetSGroupName",
    "indigoGetRepeatingUnitSubscript",
    "indigoMassComposition",
    "indigoCanonicalSmiles",
    "indigoLayeredCode",
    "indigoSmiles",
    "indigoSmarts",
    "indigoCanonicalSmarts",
    "indigoName",
    "indigoGetProperty",
    "indigoCheckBadValence",
    "indigoCheckAmbiguousH",
    "indigoRawData",
    "indigoToString",
    "indigoDbgInternalType",
    "indigoDbgProfiling"
  ],
  "qword": [
    "indigoAllocSessionId",
    "indigoSetSessionId",
    "indigoReleaseSessionId",
    "indigoDbgProfilingGetCounter"
  ],
  "void": [
    "indigoSetSessionId",
    "indigoReleaseSessionId",
    "indigoGetLastError",
    "indigoSetErrorHandler",
    "indigoCountReferences",
    "indigoWriteBuffer",
    "indigoCreateMolecule",
    "indigoCreateQueryMolecule",
    "indigoCreateReaction",
    "indigoCreateQueryReaction",
    "indigoDbgBreakpoint"
  ],
  "INDIGO_ERROR_HANDLER": [
    "indigoSetErrorHandler"
  ],
  "void*": [
    "indigoSetErrorHandler"
  ],
  "int": [
    "indigoFree",
    "indigoClone",
    "indigoCountReferences",
    "indigoFreeAllObjects",
    "indigoSetOption",
    "indigoSetOptionInt",
    "indigoSetOptionBool",
    "indigoSetOptionFloat",
    "indigoSetOptionColor",
    "indigoSetOptionXY",
    "indigoResetOptions",
    "indigoReadFile",
    "indigoReadString",
    "indigoLoadString",
    "indigoReadBuffer",
    "indigoLoadBuffer",
    "indigoWriteFile",
    "indigoWriteBuffer",
    "indigoClose",
    "indigoNext",
    "indigoHasNext",
    "indigoIndex",
    "indigoRemove",
    "indigoCreateMolecule",
    "indigoCreateQueryMolecule",
    "indigoLoadMolecule",
    "indigoLoadMoleculeFromString",
    "indigoLoadMoleculeFromFile",
    "indigoLoadMoleculeFromBuffer",
    "indigoLoadQueryMolecule",
    "indigoLoadQueryMoleculeFromString",
    "indigoLoadQueryMoleculeFromFile",
    "indigoLoadQueryMoleculeFromBuffer",
    "indigoLoadSmarts",
    "indigoLoadSmartsFromString",
    "indigoLoadSmartsFromFile",
    "indigoLoadSmartsFromBuffer",
    "indigoSaveMolfile",
    "indigoSaveMolfileToFile",
    "indigoMolfile",
    "indigoSaveCml",
    "indigoSaveCmlToFile",
    "indigoCml",
    "indigoSaveCdxml",
    "indigoSaveCdxmlToFile",
    "indigoCdxml",
    "indigoSaveMDLCT",
    "indigoNameToStructure",
    "indigoLoadReaction",
    "indigoLoadReactionFromString",
    "indigoLoadReactionFromFile",
    "indigoLoadReactionFromBuffer",
    "indigoLoadQueryReaction",
    "indigoLoadQueryReactionFromString",
    "indigoLoadQueryReactionFromFile",
    "indigoLoadQueryReactionFromBuffer",
    "indigoLoadReactionSmarts",
    "indigoLoadReactionSmartsFromString",
    "indigoLoadReactionSmartsFromFile",
    "indigoLoadReactionSmartsFromBuffer",
    "indigoCreateReaction",
    "indigoCreateQueryReaction",
    "indigoAddReactant",
    "indigoAddProduct",
    "indigoAddCatalyst",
    "indigoCountReactants",
    "indigoCountProducts",
    "indigoCountCatalysts",
    "indigoCountMolecules",
    "indigoGetMolecule",
    "indigoIterateReactants",
    "indigoIterateProducts",
    "indigoIterateCatalysts",
    "indigoIterateMolecules",
    "indigoSaveRxnfile",
    "indigoSaveRxnfileToFile",
    "indigoRxnfile",
    "indigoOptimize",
    "indigoNormalize",
    "indigoStandardize",
    "indigoIonize",
    "indigoBuildPkaModel",
    "indigoGetAcidPkaValue",
    "indigoGetBasicPkaValue",
    "indigoAutomap",
    "indigoGetAtomMappingNumber",
    "indigoSetAtomMappingNumber",
    "indigoGetReactingCenter",
    "indigoSetReactingCenter",
    "indigoClearAAM",
    "indigoCorrectReactingCenters",
    "indigoIterateAtoms",
    "indigoIteratePseudoatoms",
    "indigoIterateRSites",
    "indigoIterateStereocenters",
    "indigoIterateAlleneCenters",
    "indigoIterateRGroups",
    "indigoCountRGroups",
    "indigoIsPseudoatom",
    "indigoIsRSite",
    "indigoStereocenterType",
    "indigoChangeStereocenterType",
    "indigoStereocenterGroup",
    "indigoSetStereocenterGroup",
    "indigoStereocenterPyramid",
    "indigoSingleAllowedRGroup",
    "indigoAddStereocenter",
    "indigoIterateRGroupFragments",
    "indigoCountAttachmentPoints",
    "indigoIterateAttachmentPoints",
    "indigoSymbol",
    "indigoDegree",
    "indigoGetCharge",
    "indigoGetExplicitValence",
    "indigoSetExplicitValence",
    "indigoAtomicNumber",
    "indigoIsotope",
    "indigoValence",
    "indigoCheckValence",
    "indigoCheckQuery",
    "indigoCheckRGroups",
    "indigoCountHydrogens",
    "indigoCountImplicitHydrogens",
    "indigoXYZ",
    "indigoSetXYZ",
    "indigoCountSuperatoms",
    "indigoCountDataSGroups",
    "indigoCountRepeatingUnits",
    "indigoCountMultipleGroups",
    "indigoCountGenericSGroups",
    "indigoIterateDataSGroups",
    "indigoIterateSuperatoms",
    "indigoIterateGenericSGroups",
    "indigoIterateRepeatingUnits",
    "indigoIterateMultipleGroups",
    "indigoIterateSGroups",
    "indigoGetSuperatom",
    "indigoGetDataSGroup",
    "indigoGetGenericSGroup",
    "indigoGetMultipleGroup",
    "indigoGetRepeatingUnit",
    "indigoDescription",
    "indigoData",
    "indigoAddDataSGroup",
    "indigoAddSuperatom",
    "indigoSetDataSGroupXY",
    "indigoSetSGroupData",
    "indigoSetSGroupCoords",
    "indigoSetSGroupDescription",
    "indigoSetSGroupFieldName",
    "indigoSetSGroupQueryCode",
    "indigoSetSGroupQueryOper",
    "indigoSetSGroupDisplay",
    "indigoSetSGroupLocation",
    "indigoSetSGroupTag",
    "indigoSetSGroupTagAlign",
    "indigoSetSGroupDataType",
    "indigoSetSGroupXCoord",
    "indigoSetSGroupYCoord",
    "indigoCreateSGroup",
    "indigoGetSGroupClass",
    "indigoGetSGroupName",
    "indigoSetSGroupClass",
    "indigoSetSGroupName",
    "indigoGetSGroupNumCrossBonds",
    "indigoAddSGroupAttachmentPoint",
    "indigoDeleteSGroupAttachmentPoint",
    "indigoGetSGroupDisplayOption",
    "indigoSetSGroupDisplayOption",
    "indigoGetSGroupSeqId",
    "indigoGetSGroupMultiplier",
    "indigoSetSGroupMultiplier",
    "indigoGetRepeatingUnitSubscript",
    "indigoGetRepeatingUnitConnectivity",
    "indigoSetSGroupBrackets",
    "indigoFindSGroups",
    "indigoGetSGroupType",
    "indigoGetSGroupIndex",
    "indigoGetSGroupOriginalId",
    "indigoSetSGroupOriginalId",
    "indigoGetSGroupParentId",
    "indigoSetSGroupParentId",
    "indigoTransformSCSRtoCTAB",
    "indigoTransformCTABtoSCSR",
    "indigoResetCharge",
    "indigoResetExplicitValence",
    "indigoResetIsotope",
    "indigoSetAttachmentPoint",
    "indigoClearAttachmentPoints",
    "indigoRemoveConstraints",
    "indigoAddConstraint",
    "indigoAddConstraintNot",
    "indigoAddConstraintOr",
    "indigoResetStereo",
    "indigoInvertStereo",
    "indigoCountAtoms",
    "indigoCountBonds",
    "indigoCountPseudoatoms",
    "indigoCountRSites",
    "indigoIterateBonds",
    "indigoBondOrder",
    "indigoBondStereo",
    "indigoTopology",
    "indigoIterateNeighbors",
    "indigoBond",
    "indigoGetAtom",
    "indigoGetBond",
    "indigoSource",
    "indigoDestination",
    "indigoClearCisTrans",
    "indigoClearStereocenters",
    "indigoCountStereocenters",
    "indigoClearAlleneCenters",
    "indigoCountAlleneCenters",
    "indigoResetSymmetricCisTrans",
    "indigoResetSymmetricStereocenters",
    "indigoMarkEitherCisTrans",
    "indigoMarkStereobonds",
    "indigoValidateChirality",
    "indigoAddAtom",
    "indigoResetAtom",
    "indigoAddRSite",
    "indigoSetRSite",
    "indigoSetCharge",
    "indigoSetIsotope",
    "indigoGetRadicalElectrons",
    "indigoGetRadical",
    "indigoSetRadical",
    "indigoResetRadical",
    "indigoSetImplicitHCount",
    "indigoAddBond",
    "indigoSetBondOrder",
    "indigoMerge",
    "indigoHighlight",
    "indigoUnhighlight",
    "indigoIsHighlighted",
    "indigoCountComponents",
    "indigoComponentIndex",
    "indigoIterateComponents",
    "indigoComponent",
    "indigoCountSSSR",
    "indigoIterateSSSR",
    "indigoIterateSubtrees",
    "indigoIterateRings",
    "indigoIterateEdgeSubmolecules",
    "indigoCountHeavyAtoms",
    "indigoGrossFormula",
    "indigoMolecularWeight",
    "indigoMostAbundantMass",
    "indigoMonoisotopicMass",
    "indigoMassComposition",
    "indigoCanonicalSmiles",
    "indigoLayeredCode",
    "indigoSymmetryClasses",
    "indigoHasCoord",
    "indigoHasZCoord",
    "indigoIsChiral",
    "indigoIsPossibleFischerProjection",
    "indigoCreateSubmolecule",
    "indigoCreateEdgeSubmolecule",
    "indigoGetSubmolecule",
    "indigoRemoveAtoms",
    "indigoRemoveBonds",
    "indigoAlignAtoms",
    "indigoAromatize",
    "indigoDearomatize",
    "indigoFoldHydrogens",
    "indigoUnfoldHydrogens",
    "indigoLayout",
    "indigoClean2d",
    "indigoSmiles",
    "indigoSmarts",
    "indigoCanonicalSmarts",
    "indigoExactMatch",
    "indigoSetTautomerRule",
    "indigoRemoveTautomerRule",
    "indigoClearTautomerRules",
    "indigoName",
    "indigoSetName",
    "indigoSerialize",
    "indigoUnserialize",
    "indigoHasProperty",
    "indigoGetProperty",
    "indigoSetProperty",
    "indigoRemoveProperty",
    "indigoIterateProperties",
    "indigoClearProperties",
    "indigoCheckBadValence",
    "indigoCheckAmbiguousH",
    "indigoFingerprint",
    "indigoCountBits",
    "indigoCommonBits",
    "indigoOneBitsList",
    "indigoSimilarity",
    "indigoIterateSDF",
    "indigoIterateRDF",
    "indigoIterateSmiles",
    "indigoIterateCML",
    "indigoIterateCDX",
    "indigoIterateSDFile",
    "indigoIterateRDFile",
    "indigoIterateSmilesFile",
    "indigoIterateCMLFile",
    "indigoIterateCDXFile",
    "indigoRawData",
    "indigoTell",
    "indigoTell64",
    "indigoSdfAppend",
    "indigoSmilesAppend",
    "indigoRdfHeader",
    "indigoRdfAppend",
    "indigoCmlHeader",
    "indigoCmlAppend",
    "indigoCmlFooter",
    "indigoCreateSaver",
    "indigoCreateFileSaver",
    "indigoAppend",
    "indigoCreateArray",
    "indigoArrayAdd",
    "indigoAt",
    "indigoCount",
    "indigoClear",
    "indigoIterateArray",
    "indigoSubstructureMatcher",
    "indigoIgnoreAtom",
    "indigoUnignoreAtom",
    "indigoUnignoreAllAtoms",
    "indigoMatch",
    "indigoCountMatches",
    "indigoCountMatchesWithLimit",
    "indigoIterateMatches",
    "indigoHighlightedTarget",
    "indigoMapAtom",
    "indigoMapBond",
    "indigoMapMolecule",
    "indigoIterateTautomers",
    "indigoExtractCommonScaffold",
    "indigoAllScaffolds",
    "indigoDecomposeMolecules",
    "indigoDecomposedMoleculeScaffold",
    "indigoIterateDecomposedMolecules",
    "indigoDecomposedMoleculeHighlighted",
    "indigoDecomposedMoleculeWithRGroups",
    "indigoCreateDecomposer",
    "indigoDecomposeMolecule",
    "indigoIterateDecompositions",
    "indigoAddDecomposition",
    "indigoGetFragmentedMolecule",
    "indigoRGroupComposition",
    "indigoExpandAbbreviations",
    "indigoToString",
    "indigoToBuffer",
    "indigoReactionProductEnumerate",
    "indigoTransform",
    "indigoTransformHELMtoSCSR",
    "indigoDbgInternalType",
    "indigoDbgProfiling",
    "indigoDbgResetProfiling",
    "indigoDbgProfilingGetCounter"
  ],
  "const char*": [
    "indigoSetOption",
    "indigoSetOptionInt",
    "indigoSetOptionBool",
    "indigoSetOptionFloat",
    "indigoSetOptionColor",
    "indigoSetOptionXY",
    "indigoReadString",
    "indigoLoadString",
    "indigoReadBuffer",
    "indigoLoadBuffer",
    "indigoLoadMoleculeFromString",
    "indigoLoadMoleculeFromBuffer",
    "indigoLoadQueryMoleculeFromString",
    "indigoLoadQueryMoleculeFromBuffer",
    "indigoLoadSmartsFromString",
    "indigoLoadSmartsFromBuffer",
    "indigoNameToStructure",
    "indigoLoadReactionFromString",
    "indigoLoadReactionFromBuffer",
    "indigoLoadQueryReactionFromString",
    "indigoLoadQueryReactionFromBuffer",
    "indigoLoadReactionSmartsFromString",
    "indigoLoadReactionSmartsFromBuffer",
    "indigoOptimize",
    "indigoNormalize",
    "indigoAutomap",
    "indigoAddDataSGroup",
    "indigoAddSuperatom",
    "indigoSetDataSGroupXY",
    "indigoSetSGroupData",
    "indigoSetSGroupDescription",
    "indigoSetSGroupFieldName",
    "indigoSetSGroupQueryCode",
    "indigoSetSGroupQueryOper",
    "indigoSetSGroupDisplay",
    "indigoSetSGroupLocation",
    "indigoSetSGroupTag",
    "indigoSetSGroupDataType",
    "indigoCreateSGroup",
    "indigoSetSGroupClass",
    "indigoSetSGroupName",
    "indigoAddSGroupAttachmentPoint",
    "indigoFindSGroups",
    "indigoRemoveConstraints",
    "indigoAddConstraint",
    "indigoAddConstraintNot",
    "indigoAddConstraintOr",
    "indigoAddAtom",
    "indigoResetAtom",
    "indigoAddRSite",
    "indigoSetRSite",
    "indigoIsPossibleFischerProjection",
    "indigoExactMatch",
    "indigoSetTautomerRule",
    "indigoSetName",
    "indigoHasProperty",
    "indigoGetProperty",
    "indigoSetProperty",
    "indigoRemoveProperty",
    "indigoFingerprint",
    "indigoOneBitsList",
    "indigoSimilarity",
    "indigoCreateSaver",
    "indigoCreateFileSaver",
    "indigoSubstructureMatcher",
    "indigoIterateTautomers",
    "indigoExtractCommonScaffold",
    "indigoGetFragmentedMolecule",
    "indigoRGroupComposition",
    "indigoDbgProfilingGetCounter"
  ],
  "float": [
    "indigoSetOptionFloat",
    "indigoSetOptionColor",
    "indigoIonize",
    "indigoBuildPkaModel",
    "indigoSetXYZ",
    "indigoSetDataSGroupXY",
    "indigoSetSGroupCoords",
    "indigoSetSGroupXCoord",
    "indigoSetSGroupYCoord",
    "indigoSetSGroupBrackets",
    "indigoAlignAtoms",
    "indigoSimilarity"
  ],
  "__FILENAME__": [
    "indigoReadFile",
    "indigoWriteFile",
    "indigoLoadMoleculeFromFile",
    "indigoLoadQueryMoleculeFromFile",
    "indigoLoadSmartsFromFile",
    "indigoSaveMolfileToFile",
    "indigoSaveCmlToFile",
    "indigoSaveCdxmlToFile",
    "indigoLoadReactionFromFile",
    "indigoLoadQueryReactionFromFile",
    "indigoLoadReactionSmartsFromFile",
    "indigoSaveRxnfileToFile",
    "indigoBuildPkaModel",
    "indigoIterateSDFile",
    "indigoIterateRDFile",
    "indigoIterateSmilesFile",
    "indigoIterateCMLFile",
    "indigoIterateCDXFile",
    "indigoCreateFileSaver"
  ],
  "float *": [
    "indigoGetAcidPkaValue",
    "indigoGetBasicPkaValue",
    "indigoXYZ"
  ],
  "int*": [
    "indigoGetReactingCenter",
    "indigoGetCharge",
    "indigoGetExplicitValence",
    "indigoCountHydrogens",
    "indigoAddDataSGroup",
    "indigoAddSuperatom",
    "indigoGetRadicalElectrons",
    "indigoGetRadical",
    "indigoSymmetryClasses",
    "indigoCreateSubmolecule",
    "indigoCreateEdgeSubmolecule",
    "indigoGetSubmolecule",
    "indigoRemoveAtoms",
    "indigoRemoveBonds",
    "indigoAlignAtoms",
    "indigoSerialize",
    "indigoToBuffer"
  ],
  "const int*": [
    "indigoStereocenterPyramid"
  ],
  "double": [
    "indigoMolecularWeight",
    "indigoMostAbundantMass",
    "indigoMonoisotopicMass"
  ],
  "const int *": [
    "indigoSymmetryClasses"
  ],
  "float*": [
    "indigoAlignAtoms"
  ],
  "byte**": [
    "indigoSerialize"
  ],
  "const byte*": [
    "indigoUnserialize"
  ],
  "long long": [
    "indigoTell64"
  ],
  "char**": [
    "indigoToBuffer"
  ]
};