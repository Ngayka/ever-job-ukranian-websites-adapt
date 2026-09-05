"""Compact standalone source catalog for the JobNest Telegram bot."""

from enum import StrEnum


class Region(StrEnum):
    UKRAINE = "ukraine"
    ODOO_UKRAINE = "odoo_ukraine"
    ODOO_WORLD = "odoo_world"
    WORLD_JOB_BOARDS = "world_job_boards"


class SourceType(StrEnum):
    JOB_BOARD = "job_board"
    COMPANY_GROUP = "company_group"
    OFFICIAL_CAREERS = "official_careers"
    REMOTE_JOB_BOARD = "remote_job_board"


SourceMetadata = dict[str, Region | SourceType | bool | int]


SOURCE_CATALOG: dict[str, SourceMetadata] = {
    "DOU": {
        "region": Region.UKRAINE,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 100,
    },
    "DJINNI": {
        "region": Region.UKRAINE,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 95,
    },
    "WORKUA": {
        "region": Region.UKRAINE,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 90,
    },
    "HAPPYMONDAY": {
        "region": Region.UKRAINE,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 80,
    },
    "UKRAINE_ODOO_COMPANIES": {
        "region": Region.ODOO_UKRAINE,
        "source_type": SourceType.COMPANY_GROUP,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 110,
    },
    "ODOO_JOBS": {
        "region": Region.ODOO_WORLD,
        "source_type": SourceType.OFFICIAL_CAREERS,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 105,
    },
    "LINKEDIN": {
        "region": Region.WORLD_JOB_BOARDS,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 100,
    },
    "INDEED": {
        "region": Region.WORLD_JOB_BOARDS,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 95,
    },
    "GLASSDOOR": {
        "region": Region.WORLD_JOB_BOARDS,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 80,
    },
    "WELLFOUND": {
        "region": Region.WORLD_JOB_BOARDS,
        "source_type": SourceType.JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 70,
    },
    "WEWORKREMOTELY": {
        "region": Region.WORLD_JOB_BOARDS,
        "source_type": SourceType.REMOTE_JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 65,
    },
    "REMOTEOK": {
        "region": Region.WORLD_JOB_BOARDS,
        "source_type": SourceType.REMOTE_JOB_BOARD,
        "enabled": True,
        "recommended_for_mvp": True,
        "priority": 60,
    },
}


def get_enabled_sources(
    region: Region | None = None,
    *,
    mvp_only: bool = False,
) -> list[str]:
    """Return enabled source keys ordered by descending priority."""
    sources = [
        source
        for source, metadata in SOURCE_CATALOG.items()
        if metadata["enabled"] is True
        and (region is None or metadata["region"] == region)
        and (
            not mvp_only
            or metadata["recommended_for_mvp"] is True
        )
    ]

    return sorted(
        sources,
        key=lambda source: (
            -int(SOURCE_CATALOG[source]["priority"]),
            source,
        ),
    )


def validate_source_catalog() -> None:
    """Raise an error when a catalog entry violates the public contract."""
    required_fields = {
        "region",
        "source_type",
        "enabled",
        "recommended_for_mvp",
        "priority",
    }

    for source, metadata in SOURCE_CATALOG.items():
        missing_fields = required_fields - metadata.keys()
        if missing_fields:
            missing = ", ".join(sorted(missing_fields))
            raise ValueError(f"{source} is missing required fields: {missing}")

        if not isinstance(metadata["region"], Region):
            raise TypeError(f"{source}.region must be a Region")

        if not isinstance(metadata["source_type"], SourceType):
            raise TypeError(f"{source}.source_type must be a SourceType")

        if type(metadata["enabled"]) is not bool:
            raise TypeError(f"{source}.enabled must be bool")

        if type(metadata["recommended_for_mvp"]) is not bool:
            raise TypeError(
                f"{source}.recommended_for_mvp must be bool"
            )

        if type(metadata["priority"]) is not int:
            raise TypeError(f"{source}.priority must be int")


validate_source_catalog()
