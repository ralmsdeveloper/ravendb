﻿namespace Raven.Server.Documents.Queries
{
    public enum MethodType
    {
        Search,
        Boost,
        StartsWith,
        EndsWith,
        Lucene,
        Exists,
        Exact,
        Count,
        Sum,
        Intersect,

        Circle,
        Wkt,
        Within,
        Contains,
        Disjoint,
        Intersects
    }
}
