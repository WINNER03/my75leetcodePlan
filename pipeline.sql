config.set(schedule="@daily")

# wait for today’s partition to land on the my_data_source table
wait_for_my_data_source = WaitForPartitionOperator(
    table="my_data_source",
    partition="ds=<DATEID>"  # <DATEID> means "today" (or rather "the current scheduled date")
)

# run some business logic using Presto and insert the result into my_staging_table
my_operator1 = PrestoOperator(
    dep_list=[wait_for_my_data_source],
    sql="""
    SELECT /* some business logic */
    FROM my_data_source
    WHERE ds='<DATEID>'
    """,
    create="my_staging_table",
    partition={"ds": "<DATEID>"}
)

# run some additional business logic using Presto on the previously
# generated table, and insert the final result into my_table
my_operator2 = PrestoOperator(
    dep_list=[my_operator1],  # we need to wait for my_operator1 to complete first
    sql="""
    SELECT /* some business logic */
    FROM my_staging_table
    WHERE ds='<DATEID>'
    """,
    create="my_table",
    partition={"ds": "<DATEID>"}
)
