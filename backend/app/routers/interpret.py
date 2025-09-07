from __future__ import annotations

from typing import Any, Dict, List

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.services.llm import ParsedRowIn, InterpretationOut, interpret_rows


router = APIRouter()


class InterpretRequest(BaseModel):
    rows: List[ParsedRowIn] = Field(default_factory=list)


@router.post("/interpret")
#EXPLAIN BUTTON MAGIC STARTS HERE
async def interpret_endpoint(payload: InterpretRequest) -> Dict[str, Any]:
    rows = payload.rows or []
    if not rows:
        raise HTTPException(status_code=400, detail="rows must be a non-empty array")

    result, meta = await interpret_rows(rows)
    # Never include PHI; meta only contains timings and opaque info
    return {"interpretation": result.model_dump(), "meta": {k: meta[k] for k in ["duration_ms", "llm", "attempts", "ok"] if k in meta}}
